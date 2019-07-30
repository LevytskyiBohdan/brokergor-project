import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-car',
  templateUrl: './passenger-car.component.html',
  styleUrls: ['./passenger-car.component.css']
})
export class PassengerCarComponent implements OnInit {
  formCheckCarFuel: boolean = true;
  formCheckCarElectro: boolean = false;

  fuel:string;
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

  public fuelChenge():void{
    if(this.fuel=="fuel" || this.fuel=="fuelDisel"){
      this.formCheckCarFuel = true;
      this.formCheckCarElectro = false;
    } else if(this.fuel == "electric"){
      this.formCheckCarFuel = false;
      this.formCheckCarElectro = true;
    } else{
      this.formCheckCarElectro = false;
      this.formCheckCarFuel = false;
    }  
  }


  public culcPrice():void{
    if(this.fuel=="fuel"){
      this.importDuty = this.price*this.country;
      this.exciseDuty = (this.age*this.engine*0.5)*0.1;
      this.VAT = ((this.price*this.country) + ((this.age*this.engine*0.5)*0.1) + this.price)*0.2;
      this.fullPrice = this.importDuty + this.exciseDuty + this.VAT + this.price;
    }else if(this.fuel=="fuelDisel"){
      this.importDuty = this.price*this.country;
      this.exciseDuty = (this.age*this.engine*0.75)*0.1;
      this.VAT = ((this.price*this.country) + ((this.age*this.engine*0.75)*0.1) + this.price)*0.2;
      this.fullPrice = this.importDuty + this.exciseDuty + this.VAT + this.price;
    }else if(this.fuel == "electric"){
      this.importDuty = 0;
      this.exciseDuty = this.batery;
      this.VAT = 0;
      this.fullPrice = this.importDuty + this.exciseDuty + this.VAT + this.price;
    } else{
      this.importDuty = this.price*0.1;
      this.exciseDuty = 100;
      this.VAT = (this.importDuty + this.exciseDuty + this.price) * 0.2;
      this.fullPrice = this.importDuty + this.exciseDuty + this.VAT + this.price;
    }  
  }
}
