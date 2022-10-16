import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { RelationshipStatusPipe } from './pipes/relationshipStatus.pipe';
import { BackgroundImgDirective } from './directives/background-img.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    RelationshipStatusPipe,
    BackgroundImgDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, RelationshipStatusPipe, BackgroundImgDirective],
})
export class SharedModule {}
