import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AddFriendComponent } from './add-friend.component';
import { AddFriendRoutingModule } from './add-friend-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddFriendComponent],
  imports: [
    CommonModule,
    SharedModule,
    AddFriendRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AddFriendModule {}
