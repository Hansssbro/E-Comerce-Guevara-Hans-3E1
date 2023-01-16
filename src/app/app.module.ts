import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { OlympusComponent } from './olympus/olympus.component';
import { YounglaComponent } from './youngla/youngla.component';
import { GymsharkComponent } from './gymshark/gymshark.component';
import { RawComponent } from './raw/raw.component';
import { LoginComponent } from './login/login.component';
import { FacturaComponent } from './factura/factura.component';
import { UsernoencontradoComponent } from './usernoencontrado/usernoencontrado.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    OlympusComponent,
    YounglaComponent,
    GymsharkComponent,
    RawComponent,
    LoginComponent,
    FacturaComponent,
    UsernoencontradoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
