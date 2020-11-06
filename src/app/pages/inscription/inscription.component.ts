import { AlertService } from './../../services/alert/alert.service';
import { Price } from './../../models/price';
import { AngularFirestore } from '@angular/fire/firestore';
import { Client } from './../../models/client';
import { Component, OnInit } from '@angular/core';
import { Inscription } from 'src/app/models/inscription';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscription: Inscription = new Inscription();
  clienteSeleccionado: Client = new Client();
  precios: Price[] = new Array<Price>();
  precioSeleccionado: Price = new Price();
  idPrecio: string = 'null';
  constructor(private db: AngularFirestore, private alertMsj: AlertService) { }

  ngOnInit(): void {
    this.db.collection('prices').get().subscribe((res) => {
      res.docs.forEach((item) => {
        let price = item.data() as Price;
        price.id = item.id;
        price.ref = item.ref;
        this.precios.push(price);
      })
    });
  }
  asignarCliente(client: Client) {
    this.inscription.cliente = client.ref;
    this.clienteSeleccionado = client;
  }
  eliminarCliente() {
    this.clienteSeleccionado = new Client();
    this.inscription.cliente = undefined;
  }

  guardar(): void {
    if (this.inscription.validar().esValido) {
      let inscripcionAgregar = {
        fecha: this.inscription.fecha,
        fechaFinal: this.inscription.fechaFinal,
        cliente: this.inscription.cliente,
        precios: this.inscription.precios,
        total: this.inscription.total
      }
      this.db.collection('inscripciones').add(inscripcionAgregar).then((res) => {
        this.inscription = new Inscription();
        this.clienteSeleccionado = new Client();
        this.precioSeleccionado = new Price();
        this.idPrecio = 'null';
        this.alertMsj.alertOk('Agregado!', 'Inscripcion agregada');
      });

    } else {
      this.alertMsj.alertError('Error!', this.inscription.validar().mensaje);
    }
  }

  seleccionarPrecio(id: string) {
    if (id != "null") {
      this.precioSeleccionado = this.precios.find(x => x.id == id);
      this.inscription.precios = this.precioSeleccionado.ref;

      this.inscription.total = this.precioSeleccionado.costo;


      this.inscription.fecha = new Date();

      if (this.precioSeleccionado.tipoDuracion == 1) {
        let dias: number = this.precioSeleccionado.duracion;
        let fechaFinal = new Date(this.inscription.fecha.getFullYear(), this.inscription.fecha.getMonth(),
          this.inscription.fecha.getDate() + dias);
        this.inscription.fechaFinal = fechaFinal;

      }
      if (this.precioSeleccionado.tipoDuracion == 2) {

        let dias: number = this.precioSeleccionado.duracion * 7;
        let fechaFinal = new Date(this.inscription.fecha.getFullYear(), this.inscription.fecha.getMonth(),
          this.inscription.fecha.getDate() + dias);
        this.inscription.fechaFinal = fechaFinal;
      }
      if (this.precioSeleccionado.tipoDuracion == 3) {
        let dias: number = this.precioSeleccionado.duracion * 15;
        let fechaFinal = new Date(this.inscription.fecha.getFullYear(), this.inscription.fecha.getMonth(),
          this.inscription.fecha.getDate() + dias);
        this.inscription.fechaFinal = fechaFinal;
      }
      if (this.precioSeleccionado.tipoDuracion == 4) {

        let anio: number = this.inscription.fecha.getFullYear();
        let meses = this.precioSeleccionado.duracion + this.inscription.fecha.getMonth();
        let dia: number = this.inscription.fecha.getDate();
        let fechaFinal = new Date(anio, meses, dia);
        this.inscription.fechaFinal = fechaFinal;
      }
      if (this.precioSeleccionado.tipoDuracion == 5) {
        let anio: number = this.inscription.fecha.getFullYear() + this.precioSeleccionado.duracion;
        let meses = this.precioSeleccionado.duracion + this.inscription.fecha.getMonth();
        let dia: number = this.inscription.fecha.getDate();
        let fechaFinal = new Date(anio, meses, dia);
        this.inscription.fechaFinal = fechaFinal;
      }
    } else {
      this.precioSeleccionado = new Price();
      this.inscription.fecha = null;
      this.inscription.fechaFinal = null;
      this.inscription.precios = null;
      this.inscription.total = 0;
    }


  }



}
