import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { INews } from '../interfaces/news.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsDetailsService {

  data: Array<INews> = [];
  dataDetails: Array<any> = [];
  constructor(private AngularFirestore: AngularFirestore) { }

  getNewsId(id){
    this.AngularFirestore.collection('news').snapshotChanges().subscribe(data => {
      this.data = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        } as INews
      })
      this.data.map(x =>{
        if(x.id == id){
          this.dataDetails = [];
          this.dataDetails.push(x);
        }
      })
    })
    
  }

}
