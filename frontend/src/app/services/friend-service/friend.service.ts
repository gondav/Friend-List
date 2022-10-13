import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IFriendListResponseModel } from '../../shared/models/responses/IFriendListResponseModel';
import { IFriendViewModel } from '../../shared/models/viewmodels/IFriendViewModel';
import { environment } from '../../../environments/environment';
import { BaseHttpService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(private baseHttpService: BaseHttpService) {}

  getFriendList(): Observable<IFriendViewModel[]> {
    return this.baseHttpService
      .getItems<IFriendListResponseModel>(environment.friendEndpoint)
      .pipe(map((response) => response.friendList));
  }

  getFriend(id: number): Observable<IFriendViewModel> {
    return this.baseHttpService.getItemByParam(environment.friendEndpoint, id);
  }
}
