import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  datosCorrectos: boolean = true;
  textoError: string = '';
  constructor(private fb: FormBuilder, public serviceAuth: AngularFireAuth, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.formularioLogin = this.fb.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.required]
    });
  }

  ingresar(): void {
    if (this.formularioLogin.valid) {
      this.datosCorrectos = true;
      this.spinner.show();
      this.serviceAuth.signInWithEmailAndPassword(this.formularioLogin.value.email, this.formularioLogin.value.password).then((user) => {
        console.log(user);
        this.spinner.hide();
      }).catch((error) => {
        //cuando el usuario no existe
        this.datosCorrectos = false;
        this.textoError = error.message;
        this.spinner.hide();
      });
    } else {
      this.datosCorrectos = false;
      this.textoError = 'Revisar que los datos esten correctos'
    }

  }

}
