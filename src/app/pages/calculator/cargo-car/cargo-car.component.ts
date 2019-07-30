import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargo-car',
  templateUrl: './cargo-car.component.html',
  styleUrls: ['./cargo-car.component.css']
})
export class CargoCarComponent implements OnInit {
  formCheckCarBody: boolean = true;
  

  bodyType: string;
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

  public bodyTypeChange():void{
    if(this.bodyType=="truck"){
      this.formCheckCarBody = true;
    } else if(this.bodyType == "tractor"){
      this.formCheckCarBody = false;
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
