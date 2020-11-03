import { AddClientComponent } from './pages/add-client/add-client.component';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'listado-clientes', component: ListClientComponent
  },
  {
    path: 'agregar-cliente', component: AddClientComponent
  },
  {
    path: 'agregar-cliente/:clientId', component: AddClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
