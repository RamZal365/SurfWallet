import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppRoutes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import {provideAnimations} from "@angular/platform-browser/animations";


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideAnimations()
  ]
}).catch(e => console.error(e));