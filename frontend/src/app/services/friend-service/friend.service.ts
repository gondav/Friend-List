import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { IFriendListResponseModel } from '../../shared/models/responses/IFriendListResponseModel';
import { IFriendViewModel } from '../../shared/models/viewmodels/IFriendViewModel';
import { environment } from '../../../environments/environment';
import { BaseHttpService } from '../base-service/base.service';
import { IFriendRequestModel } from '../../shared/models/requests/IFriendRequestModel';
import { IFriendResponseModel } from '../../shared/models/responses/IFriendResponseModel';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  friendsSubject = new BehaviorSubject<IFriendViewModel[]>([]);
  friendsObservable = this.friendsSubject.asObservable();

  constructor(private baseHttpService: BaseHttpService) {}

  getFriendList(): void {
    this.baseHttpService
      .getItems<IFriendListResponseModel>(environment.friendEndpoint)
      .pipe(map((response) => response.friendList))
      .subscribe((friendList: IFriendViewModel[]) =>
        this.friendsSubject.next(friendList)
      );
  }

  getFriend(id: number): Observable<IFriendViewModel> {
    return this.baseHttpService.getItemByParam(environment.friendEndpoint, id);
  }

  createFriend(
    friendAttributes: IFriendRequestModel
  ): Observable<IFriendResponseModel> {
    return this.baseHttpService.createItem<IFriendResponseModel>(
      environment.friendEndpoint,
      friendAttributes
    );
  }

  updateFriend(
    friendAttributes: IFriendRequestModel,
    id: number
  ): Observable<IFriendResponseModel> {
    return this.baseHttpService.updateItem<IFriendResponseModel>(
      environment.friendEndpoint,
      id,
      friendAttributes
    );
  }

  deleteFriend(id: number): void {
    this.baseHttpService
      .deleteItem<IFriendResponseModel>(environment.friendEndpoint, id)
      .subscribe({
        next: (_res) => this.getFriendList(),
        error: (err) => console.log(err),
      });
  }
}
