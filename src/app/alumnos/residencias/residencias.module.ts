import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidenciasRoutingModule } from './residencias-routing.module';
import { ResidenciasComponent } from './residencias.component';


@NgModule({
  declarations: [ResidenciasComponent],
  imports: [
    CommonModule,
    ResidenciasRoutingModule
  ]
})
export class ResidenciasModule { }
