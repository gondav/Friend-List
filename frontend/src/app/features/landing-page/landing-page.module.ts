import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { FriendCardComponent } from './friend-card/friend-card.component';

@NgModule({
  declarations: [LandingPageComponent, FriendCardComponent],
  imports: [CommonModule, SharedModule, LandingPageRoutingModule],
})
export class LandingPageModule {}
