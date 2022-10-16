import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { RelationshipStatusPipe } from './pipes/relationshipStatus.pipe';

@NgModule({
  declarations: [HeaderComponent, RelationshipStatusPipe],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, RelationshipStatusPipe],
})
export class SharedModule {}
