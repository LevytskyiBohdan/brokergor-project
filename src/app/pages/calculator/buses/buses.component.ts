import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {
  fuel: string;
  country: number;
  age: number;
  price: number;
  engine: number;

  btnCall: boolean = false;

  nameCli: string;
  emailCli: string;
  phoneCli: string;
  messageCli: string;

  importDuty: number;
  exciseDuty: number;
  VAT: number;
  fullPrice: number;

  constructor() { }

  ngOnInit() {
  }

  public culcPrice(): void {
    if (this.country == 1) {
      this.importDuty = Math.floor(this.price * 0.1);
      if (this.age == 1) { this.exciseDuty = Math.floor(this.engine * 0.007); }
      if (this.age == 2) { this.exciseDuty = Math.floor(this.engine * 0.35); }
    } 
    else if (this.country == 2) {
      this.importDuty = 0;
      if (this.age == 1) { this.exciseDuty = Math.floor(this.engine * 0.007); }
      if (this.age == 2) { this.exciseDuty = Math.floor(this.engine * 0.35); }
    } 
    else if (this.country == 3) {
      if (this.fuel == 'fuel') {
        this.importDuty = Math.floor(this.price * 0.1);
      } else if (this.fuel == 'fuelDisel') {
        if (this.engine < 5002) {
          this.importDuty = Math.floor(this.price * 0.1);
        } else if (this.engine >= 5002) {
          this.importDuty = Math.floor(this.price * 0.2);
        }
      }
      if (this.age == 1) { this.exciseDuty = Math.floor(this.engine * 0.007); }
      if (this.age == 2) { this.exciseDuty = Math.floor(this.engine * 0.35); }
    } 
    else if (this.country == 4) {
      if (this.fuel == 'fuel') {
        this.importDuty = Math.floor(this.price * 0.075);
      } else if (this.fuel == 'fuelDisel') {
        if (this.engine < 5002) {
          this.importDuty = Math.floor(this.price * 0.075);
        } else if (this.engine >= 5002) {
          this.importDuty = Math.floor(this.price * 0.15);
        }
      }
      if (this.age == 1) { this.exciseDuty = Math.floor(this.engine * 0.007); }
      if (this.age == 2) { this.exciseDuty = Math.floor(this.engine * 0.35); }
    }

    this.VAT = Math.floor((this.price + this.importDuty + this.exciseDuty) * 0.2);
    this.fullPrice = Math.floor(this.importDuty + this.exciseDuty + this.VAT + this.price);
    this.btnCall = true;
  }


  sendMessage(form):void{
    // @ts-ignore
    jivo_api.sendMessage({
      "name": form.value.nameCli,
      "email": form.value.emailCli,
      "phone": form.value.phoneCli,
      "description": "Автобуси",
      "message": `Ввізне мито - ${this.importDuty}, акцизне мито - ${this.exciseDuty}, ПДВ - ${this.VAT}, вартість авто з розмитненням - ${this.fullPrice}, пальне - ${this.fuel}, вартість - ${this.price} об'єм моттору - ${this.engine}, вік авто - ${this.age}, країна походження - ${this.country}, повідомлення - ${form.value.messageCli}`
    });
    // @ts-ignore
    jivo_api._sendIntroduce({
      "name": form.value.nameCli,
      "email": form.value.emailCli,
      "phone": form.value.phoneCli,
    })
    
  }




}
