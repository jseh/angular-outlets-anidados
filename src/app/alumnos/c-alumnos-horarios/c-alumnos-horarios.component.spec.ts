import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAlumnosHorariosComponent } from './c-alumnos-horarios.component';

describe('CAlumnosHorariosComponent', () => {
  let component: CAlumnosHorariosComponent;
  let fixture: ComponentFixture<CAlumnosHorariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAlumnosHorariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAlumnosHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
