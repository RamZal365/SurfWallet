import { Component } from '@angular/core';
// import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router'


@Component({
  selector: 'sw-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule],
})
export class SidenavComponent {
  constructor(){}
}
