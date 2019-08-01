import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargo-car',
  templateUrl: './cargo-car.component.html',
  styleUrls: ['./cargo-car.component.css']
})
export class CargoCarComponent implements OnInit {
  formCheckCarBody: boolean = true;


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
  }

}
