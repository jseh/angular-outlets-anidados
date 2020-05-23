import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { COtroComponent } from './c-otro/c-otro.component';
import { CErrorComponent } from './c-error/c-error.component';
import { COkeyComponent } from './c-okey/c-okey.component';
import { CInicioComponent } from './c-inicio/c-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    COtroComponent,
    CErrorComponent,
    COkeyComponent,
    CInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
