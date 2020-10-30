import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
    this.db.collection('clientes').valueChanges().subscribe((user) => {
      this.clientes = user;
      console.log(this.clientes);
    });
  }

}
