import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISlide } from '../interfaces/slide.interface';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SliderService {
  data: Array<ISlide> = [];
  
  constructor(private http: HttpClient, private AngularFirestore: AngularFirestore) { }

  getSlide() {
    this.AngularFirestore.collection('slider').snapshotChanges().subscribe(data =>{
      this.data = data.map(item => {
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as ISlide;
      })
    });    
  }

  addSlide(form, image, imageSM): void{
    let data = Object.assign({}, form.value, {image}, {imageSM});
    delete data.id;
    console.log(data);
    
    this.AngularFirestore.collection('slider').add(data);
  }

  deleteSlide(id: string): void{
    if(confirm('Справді бажаєте видалити елемент?')){
      this.AngularFirestore.doc('slider/' + id).delete();
    }
  }
}
