import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  constructor(private fb: FormBuilder, public serviceAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.formularioLogin = this.fb.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.required]
    });
  }

  ingresar(): void {
    this.serviceAuth.signInWithEmailAndPassword(this.formularioLogin.value.email, this.formularioLogin.value.password).then((user) => {
      console.log(user);
    })
  }

}
