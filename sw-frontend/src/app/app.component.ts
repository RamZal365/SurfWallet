import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { SidenavService } from './sidenav/sidenav.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    ToolbarComponent,
    RouterModule,
    MatSidenavModule,
    CommonModule,
    SidenavComponent,
  ],
})
export class AppComponent implements OnInit {
  isExpanded: boolean = false;
  title: string = 'SurfWallet';

  constructor(public sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.subjectIsExpanded.subscribe((isExpanded) => {
      this.isExpanded = isExpanded;
    });
  }
}
