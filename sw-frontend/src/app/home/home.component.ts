import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ApiService } from '../api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    MatButtonModule,
    HttpClientModule
  ],
  providers: []
})
export class HomeComponent {
  title = "Surf Wallet"

  surfboards: any[] = [];
  wetsuits: any[] = [];
  spots: any[] = [];

  constructor(private apiService: ApiService){}

  getSurfboards(){
    this.apiService.list('surfboards').subscribe((data: any[]) => {
      this.surfboards = data;
    });
  }
  getWetsuits(){
    this.apiService.list('wetsuits').subscribe((data: any[]) => {
      this.wetsuits = data;
    });
  }
  getSpots(){
    this.apiService.list('spots').subscribe((data: any[]) => {
      this.spots = data;
    });
  }
}
