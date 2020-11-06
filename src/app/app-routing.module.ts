import { HomeComponent } from './pages/home/home.component';
import { ListInscriptionsComponent } from './pages/list-inscriptions/list-inscriptions.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { PricesComponent } from './pages/prices/prices.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'inscription', component: InscriptionComponent
  },
  {
    path: 'listado-clientes', component: ListClientComponent
  },
  {
    path: 'agregar-cliente', component: AddClientComponent
  },
  {
    path: 'agregar-cliente/:clientId', component: AddClientComponent
  },
  {
    path: 'precios', component: PricesComponent
  },
  {
    path: 'listado-inscripciones', component: ListInscriptionsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
