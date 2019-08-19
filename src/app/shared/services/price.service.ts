import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPrice } from '../interfaces/price.interface';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private data: Array<IPrice>=[];

  constructor(private http: HttpClient, private AngularFirestore: AngularFirestore) { }

  getData(): Array<IPrice>{
    return this.data;
  }

  public getPrice(){
    return this.AngularFirestore.collection('price').snapshotChanges();
  }

  public addPrice(form){    
    let data = Object.assign({}, form.value);
    delete data.id;
    this.AngularFirestore.collection('price').add(data);
  }

  public saveEdit(form, id){
    let data = Object.assign({id}, form.value);
    delete data.id;
    this.AngularFirestore.doc('price/' + id).update(data);
  }

  public deletePrice(id:string): void{
    if(confirm('Справді бажаєте видалити елемент?')){
      this.AngularFirestore.doc('price/' + id).delete();
    }
  }
}
