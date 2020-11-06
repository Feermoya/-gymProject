import { DocumentReference } from '@angular/fire/firestore';
export class Inscription {
  fecha: Date;
  fechaFinal: Date;
  cliente: DocumentReference;
  precios: DocumentReference;
  total: number;

  constructor() {
    this.fecha = null;
    this.fechaFinal = null;
    this.cliente = this.cliente;
    this.precios = this.precios;
    this.total = this.total;

  }

  validar(): any {
    let respuesta = {
      esValido: false,
      mensaje: ''
    }

    if (this.cliente === null || this.cliente === undefined) {
      respuesta.esValido = false;
      respuesta.mensaje = 'Por favor seleccione un cliente';
      return respuesta;
    }
    if (this.precios === null || this.precios === undefined) {
      respuesta.esValido = false;
      respuesta.mensaje = 'No selecciono un precio';
      return respuesta;
    }
    if (this.fecha === null || this.fecha === undefined) {
      respuesta.esValido = false;
      respuesta.mensaje = 'No hay una fecha de inicio';
      return respuesta;
    }
    if (this.fechaFinal === null || this.fechaFinal === undefined) {
      respuesta.esValido = false;
      respuesta.mensaje = 'No hay una fecha final';
      return respuesta;
    }

    if (this.total <= 0 || this.total === undefined) {
      respuesta.esValido = false;
      respuesta.mensaje = 'No se puede calcular el total';
      return respuesta;
    }
    respuesta.esValido = true;
    return respuesta;
  }
}
