import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISlide } from '../interfaces/slide.interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SliderService {
  data: Array<ISlide> = [];
  // private url: string;
  
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
    // console.log(data);
    
    this.AngularFirestore.collection('slider').add(data);
  }

  deleteSlide(id: string): void{
    if(confirm('Справді бажаєте видалити елемент?')){
      this.AngularFirestore.doc('slider/' + id).delete();
    }
  }





  // getData():Array<ISlide>{
  //   return this.data;
  // }

  // public getSlide(): {
  //   return this.http.get<Array<ISlide>>(this.url);
  // }

  // public addSlide(slide: ISlide): Observable<Array<ISlide>>{
  //   return this.http.post<Array<ISlide>>(this.url, slide);
  // }

  // public deleteSlide(id: number): Observable<Array<ISlide>>{
  //   return this.http.delete<Array<ISlide>>(`${this.url}/${id}`);
  // }
}
