import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/contact.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private data: Array<IContact> = [];
  private url: string;


  constructor(private http: HttpClient, private AngularFirestore: AngularFirestore) {
    // this.url = 'http://localhost:3000/contacts'
   }

  //  getData(): Array<IContact>{
  //    return this.data;
  //  }

   public getContact(){
     return this.AngularFirestore.collection('contact').snapshotChanges();
   }

   public editContact(id, phone, email): void{
     let data = {"phone": phone, "email": email}     
     this.AngularFirestore.doc('contact/' + id).update(data);
   }

  //  public saveEdit(id){
  //   let data = Object.assign({id}, form.value);
  //   delete data.id;
  //   // console.log(form);
  //   this.AngularFirestore.doc('price/' + id).update(data);
  // }
  

  //  public editContact(contact: IContact): Observable<Array<IContact>>{
  //    return this.http.put<Array<IContact>>(`${this.url}/${contact.id}`, contact);
  //  } 
   
}
