import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'sw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [
    MatButtonModule
  ]
})
export class ButtonComponent {
  @Input({ required: true }) buttonText!: string;
}
