import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Inscription } from 'src/app/models/inscription';

@Component({
  selector: 'app-list-inscriptions',
  templateUrl: './list-inscriptions.component.html',
  styleUrls: ['./list-inscriptions.component.scss']
})
export class ListInscriptionsComponent implements OnInit {

  inscripciones: any[] = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.inscripciones.length = 0;
    this.db.collection('inscripciones').get().subscribe((res) => {
      res.forEach((inscripcion) => {
        let inscripcionObtenida = inscripcion.data();
        inscripcionObtenida.id = inscripcion.id;
        this.db.doc(inscripcion.data().cliente.path).get().subscribe((cliente) => {
          inscripcionObtenida.clienteObtenido = cliente.data();
          inscripcionObtenida.fecha = new Date(inscripcionObtenida.fecha.seconds * 1000);
          inscripcionObtenida.fechaFinal = new Date(inscripcionObtenida.fechaFinal.seconds * 1000);
          this.inscripciones.push(inscripcionObtenida);
        });
      });
    });
  }

}
