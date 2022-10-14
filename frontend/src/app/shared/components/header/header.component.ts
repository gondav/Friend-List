import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}

  toggleMobMenu(mobMenu: HTMLDivElement): void {
    mobMenu.style.display === 'block'
      ? (mobMenu.style.display = 'none')
      : (mobMenu.style.display = 'block');
  }
}
