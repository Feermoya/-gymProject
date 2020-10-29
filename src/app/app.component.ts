import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gym';

  constructor(public auth: AngularFireAuth) {
  }
  login() {
    this.auth.signInWithEmailAndPassword('fmoya97.fm@gmail.com', '123456');
  }
  logout() {
    this.auth.signOut();
  }

}



