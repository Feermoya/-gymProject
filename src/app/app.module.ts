import { AlertService } from './services/alert/alert.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { PricesComponent } from './pages/prices/prices.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListClientComponent,
    AddClientComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    NgxSpinnerModule,
    BsDropdownModule.forRoot()
  ],
  providers: [AngularFireAuth, AngularFirestore, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
