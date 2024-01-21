import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'sw-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: []
})
export class ToolbarComponent {
  constructor(public sidenavService:  SidenavService){}
}
