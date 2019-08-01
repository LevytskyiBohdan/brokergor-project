import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISlide } from '../interfaces/slide.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private data: Array<ISlide>=[];
  private url: string;
  
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/slider'
  }

  getData():Array<ISlide>{
    return this.data;
  }

  public getSlide(): Observable<Array<ISlide>>{
    return this.http.get<Array<ISlide>>(this.url);
  }

  public addSlide(slide: ISlide): Observable<Array<ISlide>>{
    return this.http.post<Array<ISlide>>(this.url, slide);
  }

  public deleteSlide(id: number): Observable<Array<ISlide>>{
    return this.http.delete<Array<ISlide>>(`${this.url}/${id}`);
  }
}
