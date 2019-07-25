import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPrice } from '../interfaces/price.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private data: Array<IPrice>=[];
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/price'
  }

  getData(): Array<IPrice>{
    return this.data;
  }

  public getPrice(): Observable<Array<IPrice>>{
    return this.http.get<Array<IPrice>>(this.url)
  }

  public addPrice(price: IPrice): Observable<Array<IPrice>>{
    return this.http.post<Array<IPrice>>(this.url, price);
  } 

  public deletePrice(id: number): Observable<Array<IPrice>>{
    return this.http.delete<Array<IPrice>>(`${this.url}/${id}`);
  }

  public editPrice(price: IPrice): Observable<Array<IPrice>>{
    return this.http.put<Array<IPrice>>(`${this.url}/${price.id}`, price);
  }
}
