import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../services/friend-service/friend.service';
import { IFriendViewModel } from '../../shared/models/viewmodels/IFriendViewModel';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  friends: IFriendViewModel[] = [];

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.friendService.getFriendList();
    this.friendService.friendsObservable.subscribe(
      (friendList) => (this.friends = friendList)
    );
  }
}
