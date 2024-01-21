import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  isExpanded = false;
  subjectIsExpanded: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isExpanded
  );

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
    this.subjectIsExpanded.next(this.isExpanded);
    console.log('Is expanded? ', this.isExpanded);
  }

  expandSidenav() {
    this.isExpanded = true;
  }

  collapseSidenav() {
    this.isExpanded = false;
  }
}
