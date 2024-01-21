import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [
    ToolbarComponent,
    RouterModule,
  ]
})
export class AppComponent {
  title = 'SurfWallet';
}
