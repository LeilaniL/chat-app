import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }

   login() {
     var googleAuth = new firebase.auth.GoogleAuthProvider();
     googleAuth.setCustomParameters({
       prompt: 'select_account'
     })
    this.afAuth.auth.signInWithPopup(googleAuth);
  }

  logout() {
    this.afAuth.auth.signOut();
    
  }

}
