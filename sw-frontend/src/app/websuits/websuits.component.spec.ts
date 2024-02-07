import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsuitsComponent } from './websuits.component';

describe('WebsuitsComponent', () => {
  let component: WebsuitsComponent;
  let fixture: ComponentFixture<WebsuitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsuitsComponent]
    });
    fixture = TestBed.createComponent(WebsuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
