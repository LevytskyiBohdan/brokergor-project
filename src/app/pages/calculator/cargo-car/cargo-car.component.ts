import { Component, OnInit } from '@angular/core';
import { RegexService } from 'src/app/shared/services/regex.service';
import { ToastrService } from 'ngx-toastr';

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

  bodyTypeErr: boolean;
  fuelErr: boolean;
  countryErr: boolean;
  ageErr: boolean;
  priceErr: boolean;
  engineErr: boolean;
  weightErr: boolean;

  bodyTypeOk: boolean;
  fuelOk: boolean;
  countryOk: boolean;
  ageOk: boolean;
  priceOk: boolean;
  engineOk: boolean;
  weightOk: boolean;


  importDuty: number;
  exciseDuty: number;
  VAT: number;
  fullPrice: number;

  constructor(private RegexService: RegexService, private ToastrService: ToastrService) { }

  ngOnInit() {
  }

  public bodyTypeChange(): void {
    if (this.bodyType == "truck") {
      this.formCheckCarBody = true;
    } else if (this.bodyType == "tractor") {
      this.formCheckCarBody = false;
    }
  }


  calculator(): void {
    this.price = Number(this.price);
    this.engine = Number(this.engine);
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

  validateBodyType(): void {
    if (this.bodyType != undefined) {
      this.bodyTypeErr = false;
      this.bodyTypeOk = true;
    } else {
      this.bodyTypeErr = true;
      this.bodyTypeOk = false;
    }
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
  validateWaight(): void {
    if (this.weight != undefined) {
      this.weightErr = false;
      this.weightOk = true;
    } else {
      this.weightErr = true;
      this.weightOk = false;
    }
  }
  public culcPrice(): void {
    //   bodyType: string;
    // fuel: string;
    // country: number;
    // age: number;
    // price: number;
    // engine: number;
    // weight: number;

    if (this.bodyType != undefined) {
      this.bodyTypeErr = false;
    } else {
      this.bodyTypeErr = true;
    }
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
    if (this.weight != undefined) {
      this.weightErr = false;
    } else {
      this.weightErr = true;
    }
    if (this.bodyType == 'truck' && this.fuel != undefined && this.country != undefined && this.age != undefined && this.RegexService.validateNumber(this.price) && this.RegexService.validateNumber(this.engine) && this.weight != undefined) {
      this.calculator();
    } else if (this.bodyType == 'tractor' && this.country != undefined && this.RegexService.validateNumber(this.price)) {
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
      "description": "Вантажівки",
      "message": `Ввізне мито - ${this.importDuty}, акцизне мито - ${this.exciseDuty}, ПДВ - ${this.VAT}, вартість авто з розмитненням - ${this.fullPrice}, тип кузова - ${this.bodyType}, пальне - ${this.fuel},  вартість - ${this.price} об'єм моттору - ${this.engine}, вік авто - ${this.age}, країна походження - ${this.country}, повна маса - ${this.weight}, повідомлення - ${form.value.messageCli}`
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
    this.bodyTypeErr = false;
    this.fuelErr = false;
    this.countryErr = false;
    this.ageErr = false;
    this.priceErr = false;
    this.engineErr = false;
    this.weightErr = false;

    this.bodyTypeOk = false;
    this.fuelOk = false;
    this.countryOk = false;
    this.ageOk = false;
    this.priceOk = false;
    this.engineOk = false;
    this.weightOk = false;
  }



}
