import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { COtroComponent } from './c-otro/c-otro.component';
import { COkeyComponent } from './c-okey/c-okey.component';



const routes: Routes = [
  { path: 'alumnos', loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule) },
  { path: 'otro', component: COtroComponent },
  { path: 'residencias', loadChildren: () => import('./alumnos/residencias/residencias.module').then(m => m.ResidenciasModule) }

  // { path: 'otro', component: COtroComponent, children: [ {path: 'okey', component: COkeyComponent} ] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
