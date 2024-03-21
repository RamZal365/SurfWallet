import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ApiService } from '../api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'surfboards',
  templateUrl: './surfboards.component.html',
  styleUrls: ['./surfboards.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    MatButtonModule,
    HttpClientModule
  ],
  providers: []
})

export class SurfboardsComponent {
  title = "Surf Wallet"

  surfboards: any[] = [];

  constructor(private apiService: ApiService){
    this.apiService.list('surfboards').subscribe((data: any[]) => {
      this.surfboards = data;
      console.log(data);
    });
  }

  getSurfboards() {
    // this.apiService.list('surfboards').subscribe((data: any[]) => {
    //   this.surfboards = data;
    // });
  }
}
