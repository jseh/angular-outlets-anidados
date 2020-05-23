import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CInicioComponent } from './c-inicio.component';

describe('CInicioComponent', () => {
  let component: CInicioComponent;
  let fixture: ComponentFixture<CInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
