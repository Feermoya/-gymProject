import { AlertService } from './../../services/alert/alert.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  formClient: FormGroup;
  esEditable: boolean = false;
  id: string;
  constructor(private fb: FormBuilder, private db: AngularFirestore, private activeRoute: ActivatedRoute, private alertMsj: AlertService) { }

  ngOnInit(): void {



    this.formClient = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      dni: ['', Validators.required],
      fechaNacimiento: [''],
      telefono: ['', Validators.required]
    })

    this.id = this.activeRoute.snapshot.params.clientId;
    if (this.id != undefined) {
      this.esEditable = true;
      this.db.doc<any>('clientes' + '/' + this.id).valueChanges().subscribe((cliente) => {
        console.log(cliente);
        this.formClient.setValue({
          nombre: cliente.nombre,
          apellido: cliente.apellido,
          email: cliente.email,
          dni: cliente.dni,
          fechaNacimiento: cliente.fechaNacimiento,
          telefono: cliente.telefono,

        })
      });
    }

  }

  agregar(): void {
    console.log(this.formClient.value);
    this.db.collection('clientes').add(this.formClient.value).then(() => {
      this.alertMsj.alertOk('Agregado!', 'Se agrego correctamente');
    }).catch(() => {
      this.alertMsj.alertError('Error!', 'No se agrego el cliente');
    });
  }

  editar(): void {


    this.db.doc('clientes/' + this.id).update(this.formClient.value).then(() => {
      this.alertMsj.alertOk('Editado!', 'Se edito correctamente');
    }).catch(() => {
      this.alertMsj.alertError('Error!', 'No se edito el cliente');
    });
  }

}
