import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { CAlumnosCalificacionesComponent } from './c-alumnos-calificaciones/c-alumnos-calificaciones.component';
import { CAlumnosHorariosComponent } from './c-alumnos-horarios/c-alumnos-horarios.component';

// no se  importa el modulo residencias

@NgModule({
  declarations: [AlumnosComponent, CAlumnosCalificacionesComponent, CAlumnosHorariosComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
