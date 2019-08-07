import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme: boolean = false;

  constructor() { }

  public themeToggle(x){
    this.theme = x;
  }

}
