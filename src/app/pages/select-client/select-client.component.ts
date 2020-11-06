import { Client } from './../../models/client';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-client',
  templateUrl: './select-client.component.html',
  styleUrls: ['./select-client.component.scss']
})
export class SelectClientComponent implements OnInit {
  @Input('nombre') nombre: string;
  @Output('seleccionoCliente') seleccionoCliente = new EventEmitter();
  @Output('canceloCliente') canceloCliente = new EventEmitter();
  clients: Client[] = new Array<Client>();
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    //me traigo los clientes
    this.db.collection<any>('clientes').get().subscribe((res) => {
      this.clients.length = 0;
      res.docs.forEach((dato) => {
        let cliente: any = dato.data();
        cliente.id = dato.id;
        cliente.ref = dato.ref;
        cliente.visible = false;
        this.clients.push(cliente);
      });
    });
  }

  buscarClientes(nombre: string) {
    this.clients.forEach((client) => {
      if (client.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())) {
        client.visible = true;
      } else {
        client.visible = false;
      }
    })
  }

  selectClient(client: Client) {
    this.nombre = client.nombre + ' ' + client.apellido;
    this.clients.forEach((cliente) => {
      cliente.visible = false;
    });
    //envio el cliente seleccionado a inscripcion
    this.seleccionoCliente.emit(client);
  }

  cancelarCliente() {
    this.nombre = undefined;
    this.canceloCliente.emit();
  }

}
