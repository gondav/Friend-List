import { Component, OnInit, Input } from '@angular/core';
import { FriendService } from '../../../services/friend-service/friend.service';
import { IFriendViewModel } from '../../../shared/models/viewmodels/IFriendViewModel';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss'],
})
export class FriendCardComponent implements OnInit {
  @Input() friend: IFriendViewModel;

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {}

  deleteFriend(id: number): void {
    this.friendService.deleteFriend(id);
  }
}
