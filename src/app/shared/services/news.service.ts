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


  addNews(form, image): void {
    let data = Object.assign({}, form.value, {image});
    delete data.id;
    console.log(data);
    this.AngularFirestore.collection('news').add(data);
  }

  seveEdit(form, id, image){
    let data = Object.assign({id}, form.value, {image});
    delete data.id;
    this.AngularFirestore.doc('news/' + id).update(data);
  }

  deleteNews(id: string): void {
    if(confirm('Спарвді бажаєте видалити елемент')){
      this.AngularFirestore.doc('news/' + id).delete();
    }
  }


}
