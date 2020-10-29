import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gym';
  usuario: User;
  cargando: boolean = true;
  constructor(public auth: AngularFireAuth) {
    this.auth.user.subscribe((usuario) => {
      setTimeout(() => {
        this.cargando = false;
        this.usuario = usuario;
      }, 1500)
    });
  }
  login(): void {
    this.auth.signInWithEmailAndPassword('fmoya97.fm@gmail.com', '123456');
  }
  logout(): void {
    this.auth.signOut();
  }

}



