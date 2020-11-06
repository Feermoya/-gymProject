import { DocumentReference } from '@angular/fire/firestore';

export class Client {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  fechaNacimiento: Date;
  telefono: number;
  dni: string;
  ref: DocumentReference;
  visible: boolean;

  constructor() {

  }
}

