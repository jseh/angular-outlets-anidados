import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COtroComponent } from './c-otro.component';

describe('COtroComponent', () => {
  let component: COtroComponent;
  let fixture: ComponentFixture<COtroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COtroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
