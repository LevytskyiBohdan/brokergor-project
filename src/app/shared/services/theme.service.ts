import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public a: any = false;

  constructor() { }

  setTheme(x: boolean){
    this.a = x;
    console.log(this.a)
  }

  getTheme(): any{
    return this.a;
  }
}
