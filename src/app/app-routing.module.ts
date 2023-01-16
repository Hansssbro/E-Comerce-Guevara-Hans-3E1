import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { FacturaComponent } from './factura/factura.component';
import { GymsharkComponent } from './gymshark/gymshark.component';
import { LoginComponent } from './login/login.component';
import { OlympusComponent } from './olympus/olympus.component';
import { PrincipalComponent } from './principal/principal.component';
import { RawComponent } from './raw/raw.component';
import { UsernoencontradoComponent } from './usernoencontrado/usernoencontrado.component';
import { YounglaComponent } from './youngla/youngla.component';

const routes: Routes = [
{
  path:'',component: LoginComponent
},
{
  path:'pr',component: PrincipalComponent
},
{
  path:'gs',component: GymsharkComponent
},
{
  path:'olp',component: OlympusComponent
},
{
  path:'raw',component: RawComponent
},
{
  path:'yg',component: YounglaComponent
},
{
  path:'f',component:FacturaComponent
},
{
  path:'n',component:UsernoencontradoComponent
},
{
  path:'c',component:CarritoComponent
}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
