import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { CAlumnosCalificacionesComponent } from './c-alumnos-calificaciones/c-alumnos-calificaciones.component';
import { CAlumnosHorariosComponent } from './c-alumnos-horarios/c-alumnos-horarios.component';


@NgModule({
  declarations: [AlumnosComponent, CAlumnosCalificacionesComponent, CAlumnosHorariosComponent],
  imports: [
    // no es necesario importar el modulo lazy si se quiere usar dentro del outlet, con una ruta de este routing module
    CommonModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
