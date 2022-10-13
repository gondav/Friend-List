import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IFriendListResponseModel } from '../../shared/models/responses/IFriendListResponseModel';
import { IFriendListViewModel } from '../../shared/models/viewmodels/IFriendListViewModel';
import { environment } from '../../../environments/environment';
import { BaseHttpService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(private baseHttpService: BaseHttpService) {}

  getFriendList(): Observable<IFriendListViewModel[]> {
    return this.baseHttpService
      .getItems<IFriendListResponseModel>(environment.friendEndpoint)
      .pipe(map((response) => response.friendList));
  }
}
