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
      this.importDuty = this.price * this.country;
      this.exciseDuty = (this.age * this.engine * 0.5) * 0.1;
      this.VAT = ((this.price * this.country) + ((this.age * this.engine * 0.5) * 0.1) + this.price) * 0.2;
      this.fullPrice = this.importDuty + this.exciseDuty + this.VAT + this.price;
    } else if (this.fuel == "fuelDisel") {
      this.importDuty = this.price * this.country;
      this.exciseDuty = (this.age * this.engine * 0.75) * 0.1;
      this.VAT = ((this.price * this.country) + ((this.age * this.engine * 0.75) * 0.1) + this.price) * 0.2;
      this.fullPrice = this.importDuty + this.exciseDuty + this.VAT + this.price;
    } else if (this.fuel == "electric") {
      this.importDuty = 0;
      this.exciseDuty = this.batery;
      this.VAT = 0;
      this.fullPrice = this.importDuty + this.exciseDuty + this.VAT + this.price;
    } else {
      this.importDuty = this.price * 0.1;
      this.exciseDuty = 100;
      this.VAT = (this.importDuty + this.exciseDuty + this.price) * 0.2;
      this.fullPrice = this.importDuty + this.exciseDuty + this.VAT + this.price;
    }
    this.btnCall = true;
  }

  sendMessage(form):void{
    console.log(form.value);
    jivo_api.sendMessage({
      "name": form.value.nameCli,
      "email": form.value.emailCli,
      "phone": form.value.phoneCli,
      "description": "Description text",
      "message": `Ввізне мито - ${this.importDuty}, акцизне мито - ${this.exciseDuty}, ПДВ - ${this.VAT}, вартість авто з розмитненням - ${this.fullPrice}, об'єм моттору - ${this.engine}, вік авто - ${this.age}, країна походження - ${this.country}, повідомлення - ${form.value.messageCli}`
    }); 
    
  }



  // f(){

  //   jivo_api.sendMessage({
  //         "name": "John Smith",
  //         "email": "email@example.com",
  //         "phone": "+14084987855",
  //         "description": "Description text",
  //         "message": `Ввізне мито - ${this.importDuty}
  //                     Акцизне мито - ${this.exciseDuty}
  //                     ПДВ - ${this.VAT}
  //                     Вартість авто з розмитненням - ${this.fullPrice}
  //                     Об'єм моттору - ${this.engine}
  //                     Вік авто - ${this.age}
  //                     Країна походження - ${this.country}`
  //      }); 
  //   jivo_api.open();
  //   }

  // f2(){
  //   jivo_api.close();
  //   }

}



