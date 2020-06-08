import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SolucionesComponent } from './pages/soluciones/soluciones.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';


const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component: SolucionesComponent,
    path:'soluciones'
  },
  {
    component: ContactanosComponent,
    path:'contactanos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
