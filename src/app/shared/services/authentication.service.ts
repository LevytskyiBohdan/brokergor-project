import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;
  
  constructor(public AngularFirestor: AngularFirestore, public AngularFireAuth: AngularFireAuth, public Router: Router, public NgZone: NgZone) { 
    this.AngularFireAuth.authState.subscribe(user =>{
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));      
        JSON.parse(localStorage.getItem('user'));
      } else{
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // return true when user is looged in and email is verified
  get isLoggedIn():boolean {
    const user  = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  singIn(email,password){
    return this.AngularFireAuth.auth.signInWithEmailAndPassword(email,password).then(
      (result) =>{
        this.NgZone.run(() =>{
          this.Router.navigate(['admin']);
        });
        this.setUserData(result.user);
      }
    ).catch((err) => {
      window.alert(err.message);
    })
  }

  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.AngularFirestor.doc(`users/${user.uid}`);
    const userData: IUser = {
      uid: user.uid,
      email: user.email,
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  forgotPassword(passwordResetEmail){
    return this.AngularFireAuth.auth.sendPasswordResetEmail(passwordResetEmail).then(() =>{
      window.alert('Password reset email sent, check your inbox');
    }).catch((err) => {
      window.alert(err);
    })
  }

  singOut() {
    return this.AngularFireAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.Router.navigate(['authentication']);
    })
  }

  sendVerificationMail(passwordResetEmail) {
    return this.AngularFireAuth.auth.currentUser.sendEmailVerification().then(() => {
      console.log('Passowrd reset email sent, check your inbox.');
    }).catch((err) => {
      console.log(err);
      
    })
  }
  




}
