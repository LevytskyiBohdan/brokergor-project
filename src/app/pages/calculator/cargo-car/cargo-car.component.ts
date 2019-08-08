import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargo-car',
  templateUrl: './cargo-car.component.html',
  styleUrls: ['./cargo-car.component.css']
})
export class CargoCarComponent implements OnInit {
  formCheckCarBody: boolean = true;

  btnCall: boolean = false;

  nameCli: string;
  emailCli: string;
  phoneCli: string;
  messageCli: string;

  bodyType: string;
  fuel: string;
  country: number;
  age: number;
  price: number;
  engine: number;
  weight: number;

  importDuty: number;
  exciseDuty: number;
  VAT: number;
  fullPrice: number;

  constructor() { }

  ngOnInit() {
  }

  public bodyTypeChange(): void {
    if (this.bodyType == "truck") {
      this.formCheckCarBody = true;
    } else if (this.bodyType == "tractor") {
      this.formCheckCarBody = false;
    }
  }


  public culcPrice(): void {
    if (this.bodyType == "truck") {
      if (this.country == 1) {
        this.importDuty = Math.floor(this.price * 0.1);
      } else if (this.country == 2) {
        this.importDuty = Math.floor(this.price * 0);
      } else if (this.country == 3) {
        this.importDuty = Math.floor(this.price * 0.05);
      } else if (this.country == 4) {
        if (this.engine <= 2500 && this.weight == 1) {
          this.importDuty = Math.floor(this.price * 0.0625);
        } else {
          this.importDuty = Math.floor(this.price * 0);
        }
      }

      if (this.age == 1) {
        if (this.weight == 1) this.exciseDuty = Math.floor(this.engine * 0.02);
        else if (this.weight == 2) this.exciseDuty = Math.floor(this.engine * 0.026);
        else if (this.weight == 3) this.exciseDuty = Math.floor(this.engine * 0.033);
      } else if (this.age == 2) {
        if (this.weight == 1) this.exciseDuty = Math.floor(this.engine * 0.8);
        else if (this.weight == 2) this.exciseDuty = Math.floor(this.engine * 1.04);
        else if (this.weight == 3) this.exciseDuty = Math.floor(this.engine * 1.32);
      } else if (this.age == 3) {
        if (this.weight == 1) this.exciseDuty = Math.floor(this.engine * 1);
        else if (this.weight == 2) this.exciseDuty = Math.floor(this.engine * 1.3);
        else if (this.weight == 3) this.exciseDuty = Math.floor(this.engine * 1.65);
      }

      this.VAT = Math.floor((this.price + this.importDuty + this.exciseDuty) * 0.2);
      this.fullPrice = Math.floor(this.importDuty + this.exciseDuty + this.VAT + this.price);



    } else if (this.bodyType == "tractor") {
      if (this.country == 1) {
        this.importDuty = Math.floor(this.price * 0.1);
      } else if (this.country == 2) {
        this.importDuty = Math.floor(this.price * 0);
      } else if (this.country == 3) {
        this.importDuty = Math.floor(this.price * 0.05);
      } else if (this.country == 4) {
        if (this.engine == 2500 && this.weight == 1) {
          this.importDuty = Math.floor(this.price * 0.0625);
        } else {
          this.importDuty = Math.floor(this.price * 0);
        }
      }

      this.exciseDuty = 0;
      this.VAT = Math.floor((this.price + this.importDuty + this.exciseDuty) * 0.2);
      this.fullPrice = Math.floor(this.importDuty + this.exciseDuty + this.VAT + this.price);
    }
    this.btnCall = true;
  }

  sendMessage(form):void{
    // @ts-ignore
    jivo_api.sendMessage({
      "name": form.value.nameCli,
      "email": form.value.emailCli,
      "phone": form.value.phoneCli,
      "description": "Вантажівки",
      "message": `Ввізне мито - ${this.importDuty}, акцизне мито - ${this.exciseDuty}, ПДВ - ${this.VAT}, вартість авто з розмитненням - ${this.fullPrice}, тип кузова - ${this.bodyType}, пальне - ${this.fuel},  вартість - ${this.price} об'єм моттору - ${this.engine}, вік авто - ${this.age}, країна походження - ${this.country}, повна маса - ${this.weight}, повідомлення - ${form.value.messageCli}`
    });
    // @ts-ignore
    jivo_api._sendIntroduce({
      "name": form.value.nameCli,
      "email": form.value.emailCli,
      "phone": form.value.phoneCli,
    })
  }



}
