import { Injectable } from '@angular/core';
import { INews } from '../interfaces/news.interface';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  data: Array<INews> = [];

  constructor(private AngularFirestore: AngularFirestore) { }

  getData(): void {
    this.AngularFirestore.collection('news').snapshotChanges().subscribe(data => {
      this.data = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        } as INews
      })
    })
  }



}
