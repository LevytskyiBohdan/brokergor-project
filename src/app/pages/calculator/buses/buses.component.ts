import { Component, OnInit } from '@angular/core';
import { RegexService } from 'src/app/shared/services/regex.service';
import { ToastrService } from 'ngx-toastr';

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

  fuelErr: boolean;
  countryErr: boolean;
  ageErr: boolean;
  priceErr: boolean;
  engineErr: boolean;

  fuelOk: boolean;
  countryOk: boolean;
  ageOk: boolean;
  priceOk: boolean;
  engineOk: boolean;

  btnCall: boolean = false;

  nameCli: string;
  emailCli: string;
  phoneCli: string;
  messageCli: string;

  importDuty: number;
  exciseDuty: number;
  VAT: number;
  fullPrice: number;

  constructor(private RegexService: RegexService, private ToastrService: ToastrService) { }

  ngOnInit() {
  }

  calculator(): void {
    this.price = Number(this.price);
    this.engine = Number(this.engine);
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

  validateFuel(): void {
    if (this.fuel != undefined) {
      this.fuelErr = false;
      this.fuelOk = true;
    } else {
      this.fuelErr = true;
      this.fuelOk = false;
    }
  }
  validateCountry(): void {
    if (this.country != undefined) {
      this.countryErr = false;
      this.countryOk = true;
    } else {
      this.countryErr = true;
      this.countryOk = false;
    }
  }
  validateAge(): void {
    if (this.age != undefined) {
      this.ageErr = false;
      this.ageOk = true;
    } else {
      this.ageErr = true;
      this.ageOk = false;
    }
  }
  validatePrice(): void {
    if (this.RegexService.validateNumber(this.price)) {
      this.priceErr = false;
      this.priceOk = true;
    } else {
      this.priceErr = true;
      this.priceOk = false;
    }
  }
  validateEngine(): void {
    if (this.RegexService.validateNumber(this.engine)) {
      this.engineErr = false;
      this.engineOk = true;
    } else {
      this.engineErr = true;
      this.engineOk = false;
    }
  }
  public culcPrice(): void {
    //   fuel: string;
    // country: number;
    // age: number;
    // price: number;
    // engine: number;
    if (this.fuel != undefined) {
      this.fuelErr = false;
    } else {
      this.fuelErr = true;
    }
    if (this.country != undefined) {
      this.countryErr = false;
    } else {
      this.countryErr = true;
    }
    if (this.age != undefined) {
      this.ageErr = false;
    } else {
      this.ageErr = true;
    }
    if (this.RegexService.validateNumber(this.price)) {
      this.priceErr = false;
    } else {
      this.priceErr = true;
    }
    if (this.RegexService.validateNumber(this.engine)) {
      this.engineErr = false;
    } else {
      this.engineErr = true;
    }
    if (!this.fuelErr && !this.countryErr && !this.ageErr && !this.priceErr && !this.engineErr) {
      this.calculator();
    } else {
      this.ToastrService.error('Заповніть форму', 'Помилка', {
        timeOut: 4000,
      })
    }
  }

  sendMessage(form, formCalc): void {
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
    this.ToastrService.success('Наш представник невдовзі зв\'яжеться з вами', 'Повідомлення надіслано', {
      timeOut: 6000,
    })
    form.reset();
    formCalc.reset();
    this.fuelErr = false;
    this.countryErr = false;
    this.ageErr = false;
    this.priceErr = false;
    this.engineErr = false;

    this.fuelOk = false;
    this.countryOk = false;
    this.ageOk = false;
    this.priceOk = false;
    this.engineOk = false;
  }




}
