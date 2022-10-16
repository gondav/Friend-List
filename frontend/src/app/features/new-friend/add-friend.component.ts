import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FriendService } from '../../services/friend-service/friend.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent implements OnInit {
  addFriendForm: FormGroup;
  ngSelect = 1;

  constructor(private friendService: FriendService, private router: Router) {}

  ngOnInit(): void {
    this.addFriendForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.maxLength(30)),
      favFood: new FormControl('', Validators.required),
      relationshipStatusId: new FormControl('', Validators.required),
    });
  }

  addNewFriend(): void {
    this.friendService.createFriend(this.addFriendForm.value).subscribe({
      next: (_response) => {
        this.router.navigate(['/friends']);
      },
      error: (error) => console.log(error),
    });
  }
}
