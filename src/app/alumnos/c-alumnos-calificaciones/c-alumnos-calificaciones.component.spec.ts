import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAlumnosCalificacionesComponent } from './c-alumnos-calificaciones.component';

describe('CAlumnosCalificacionesComponent', () => {
  let component: CAlumnosCalificacionesComponent;
  let fixture: ComponentFixture<CAlumnosCalificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAlumnosCalificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAlumnosCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
