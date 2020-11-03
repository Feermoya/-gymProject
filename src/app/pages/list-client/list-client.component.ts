import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { error } from 'protractor';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {


  clientes: any[] = new Array<any>();

  constructor(private db: AngularFirestore) {

  }

  ngOnInit(): void {
    // this.db.collection('clientes').valueChanges().subscribe((user) => {
    //   this.clientes = user;
    //   console.log(this.clientes);
    // });
    try {
      this.clientes.length = 0;
      this.db.collection('clientes').get().subscribe((user) => {
        user.docs.forEach((client) => {
          let cliente = client.data();
          cliente.id = client.id;
          cliente.ref = client.ref;
          this.clientes.push(cliente);
        });
      });
    } catch (error) {
      console.error('Ocurrio un error al traer los clientes');
    }

  }

}
