import { Component, OnInit, Input } from '@angular/core';
import { IFriendViewModel } from 'src/app/shared/models/viewmodels/IFriendViewModel';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss'],
})
export class FriendCardComponent implements OnInit {
  @Input() friend: IFriendViewModel;

  constructor() {}

  ngOnInit(): void {}
}
