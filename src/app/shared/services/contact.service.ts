import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/contact.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { ISlide } from '../interfaces/slide.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private data: Array<IContact> = [];
  private url: string;


  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/contacts'
   }

   getData(): Array<IContact>{
     return this.data;
   }

   public getContact(): Observable<Array<IContact>>{
     return this.http.get<Array<IContact>>(this.url);
   }

   public editContact(contact: IContact): Observable<Array<IContact>>{
     return this.http.put<Array<IContact>>(`${this.url}/${contact.id}`, contact);
   } 
   
}
