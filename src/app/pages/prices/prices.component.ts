import { Price } from './../../models/price';
import { AlertService } from './../../services/alert/alert.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  formPrice: FormGroup;
  prices: Price[] = new Array<Price>();
  esEditar: boolean = false;
  id: string;
  constructor(private fb: FormBuilder, private db: AngularFirestore, private alertMsj: AlertService) { }

  ngOnInit(): void {
    this.createForm();
    this.showPrices();
  }

  showPrices() {
    this.db.collection<Price>('prices').get().subscribe((res) => {
      this.prices.length = 0;
      res.docs.forEach((dato) => {
        let price = dato.data() as Price;//para que lo parsee a precio
        price.id = dato.id;
        price.ref = dato.ref;
        this.prices.push(price);
      });
    });
  }

  createForm(): void {
    this.formPrice = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      duracion: ['', Validators.required],
      tipoDuracion: ['', Validators.required]
    })
  }

  add(): void {
    this.db.collection<Price>('prices').add(this.formPrice.value).then(() => {
      this.alertMsj.alertOk('Agregado!', 'Precio agregado correctamente');
      this.formPrice.reset();
      this.showPrices();
    }).catch(() => {
      this.alertMsj.alertError('Error!', 'Precio no pudo ser agregado');
    });
  }

  editPrice(price: Price) {
    this.esEditar = true;
    this.formPrice.setValue({
      nombre: price.nombre,
      costo: price.costo,
      duracion: price.duracion,
      tipoDuracion: price.tipoDuracion
    });
    this.id = price.id;
  }

  edit(): void {
    this.db.doc('prices/' + this.id).update(this.formPrice.value).then(() => {
      this.alertMsj.alertOk('Editado!', 'El precio se edito correctamente');
      this.formPrice.reset();
      this.esEditar = false;
      this.showPrices();
    }).catch(() => {
      this.alertMsj.alertError('Error!', 'Error al editar el precio');
    });
  }

}
