import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosComponent } from './alumnos.component';
import { CAlumnosCalificacionesComponent } from './c-alumnos-calificaciones/c-alumnos-calificaciones.component';
import { CAlumnosHorariosComponent } from './c-alumnos-horarios/c-alumnos-horarios.component';

//solo debo poner un outlet en el componente que carga por defecto este modulo (AlumnosComponent)

const routes: Routes = [
  { 
    // ruta /alumnos
    // definar el componente al cargar el modulo
    path: '', 
    component: AlumnosComponent,
    children: [

      { 
        // define la pantalla del outlet por defecto
        path: '',
        component: CAlumnosCalificacionesComponent
      },
      { 
        path: 'cal',
        component: CAlumnosCalificacionesComponent
      },
      { 
        path: 'hor',
        component: CAlumnosHorariosComponent
      },
      { 
        // posible cargar un modulo lazy
        // ruta /alumnos/res
        path: 'res',
        loadChildren: () => import('../alumnos/residencias/residencias.module').then(m => m.ResidenciasModule) 
      },
    
      
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AlumnosRoutingModule { }
