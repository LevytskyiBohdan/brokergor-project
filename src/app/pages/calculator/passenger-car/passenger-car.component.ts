import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-car',
  templateUrl: './passenger-car.component.html',
  styleUrls: ['./passenger-car.component.css']
})
export class PassengerCarComponent implements OnInit {
  formCheckCarFuel: boolean = true;
  formCheckCarElectro: boolean = false;

  btnCall: boolean = false;

  nameCli: string;
  emailCli: string;
  phoneCli: string;
  messageCli: string;

  fuel: string;
  country: number;
  age: number;
  price: number;
  engine: number;
  batery: number;

  importDuty: number;
  exciseDuty: number;
  VAT: number;
  fullPrice: number;


  constructor() { }

  ngOnInit() {
  }

  public fuelChenge(): void {
    if (this.fuel == "fuel" || this.fuel == "fuelDisel") {
      this.formCheckCarFuel = true;
      this.formCheckCarElectro = false;
    } else if (this.fuel == "electric") {
      this.formCheckCarFuel = false;
      this.formCheckCarElectro = true;
    } else {
      this.formCheckCarElectro = false;
      this.formCheckCarFuel = false;
    }
  }

  // jivo(state){
  //   state.jivo_api.open({start: 'call'});
  // }

  public culcPrice(): void {
    if (this.fuel == "fuel") {
      this.importDuty = Math.floor(this.price * this.country);
      this.exciseDuty = Math.floor((this.age * this.engine * 0.5) * 0.1);
      this.VAT = Math.floor(((this.price * this.country) + ((this.age * this.engine * 0.5) * 0.1) + this.price) * 0.2);
      this.fullPrice = Math.floor(this.importDuty + this.exciseDuty + this.VAT + this.price);
    } else if (this.fuel == "fuelDisel") {
      this.importDuty = Math.floor(this.price * this.country);
      this.exciseDuty = Math.floor((this.age * this.engine * 0.75) * 0.1);
      this.VAT = Math.floor(((this.price * this.country) + ((this.age * this.engine * 0.75) * 0.1) + this.price) * 0.2);
      this.fullPrice = Math.floor(this.importDuty + this.exciseDuty + this.VAT + this.price);
    } else if (this.fuel == "electric") {
      this.importDuty = 0;
      this.exciseDuty = this.batery;
      this.VAT = 0;
      this.fullPrice = Math.floor(this.importDuty + this.exciseDuty + this.VAT + this.price);
    } else {
      this.importDuty = Math.floor(this.price * 0.1);
      this.exciseDuty = 100;
      this.VAT = Math.floor((this.importDuty + this.exciseDuty + this.price) * 0.2);
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
      "description": "Легкове авто",
      "message": `Ввізне мито - ${this.importDuty}, акцизне мито - ${this.exciseDuty}, ПДВ - ${this.VAT}, вартість авто з розмитненням - ${this.fullPrice}, вартість - ${this.price} об'єм моттору - ${this.engine}, вік авто - ${this.age}, країна походження - ${this.country}, повідомлення - ${form.value.messageCli}`
    });
    // @ts-ignore
    jivo_api._sendIntroduce({
      "name": form.value.nameCli,
      "email": form.value.emailCli,
      "phone": form.value.phoneCli,
    })
    
  }

}



