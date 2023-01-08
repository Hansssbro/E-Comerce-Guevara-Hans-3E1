import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { OlympusComponent } from './olympus/olympus.component';
import { YounglaComponent } from './youngla/youngla.component';
import { GymsharkComponent } from './gymshark/gymshark.component';
import { RawComponent } from './raw/raw.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    OlympusComponent,
    YounglaComponent,
    GymsharkComponent,
    RawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
