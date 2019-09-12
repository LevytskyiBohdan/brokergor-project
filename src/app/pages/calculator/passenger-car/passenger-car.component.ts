import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegexService } from 'src/app/shared/services/regex.service';

@Component({
  selector: 'app-passenger-car',
  templateUrl: './passenger-car.component.html',
  styleUrls: ['./passenger-car.component.css'],
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

  fuelErr: boolean = false;
  countryErr: boolean = false;
  ageErr: boolean = false;
  priceErr: boolean = false;
  engineErr: boolean = false;
  bateryErr: boolean = false;

  fuelOk: boolean = false;
  countryOk: boolean = false;
  ageOk: boolean = false;
  priceOk: boolean = false;
  engineOk: boolean = false;
  bateryOk: boolean = false;

  importDuty: number;
  exciseDuty: number;
  VAT: number;
  fullPrice: number;


  constructor(private ToastrService: ToastrService, private RegexService: RegexService) { }

  ngOnInit() { }

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

  calculator(): void {
    if (this.fuel == "fuel") {
      this.importDuty = Math.floor(Number(this.price) * Number(this.country));
      this.exciseDuty = Math.floor((Number(this.age) * Number(this.engine) * 0.5) * 0.1);
      this.VAT = Math.floor((Number(this.exciseDuty) + Number(this.importDuty) + Number(this.price)) * 0.2);
      this.fullPrice = Math.floor(Number(this.importDuty) + Number(this.exciseDuty) + Number(this.VAT) + Number(this.price));
    } else if (this.fuel == "fuelDisel") {
      this.importDuty = Math.floor(Number(this.price) * Number(this.country));
      this.exciseDuty = Math.floor((Number(this.age) * Number(this.engine) * 0.75) * 0.1);
      this.VAT = Math.floor((Number(this.exciseDuty) + Number(this.importDuty) + Number(this.price)) * 0.2);
      this.fullPrice = Math.floor(Number(this.importDuty) + Number(this.exciseDuty) + Number(this.VAT) + Number(this.price));
    } else if (this.fuel == "electric") {
      this.importDuty = 0;
      this.exciseDuty = Number(this.batery);
      this.VAT = 0;
      this.fullPrice = Math.floor(Number(this.importDuty) + Number(this.exciseDuty) + Number(this.VAT) + Number(this.price));
    } else {
      this.importDuty = Math.floor(Number(this.price) * 0.1);
      this.exciseDuty = 100;
      this.VAT = Math.floor((Number(this.importDuty) + Number(this.exciseDuty) + Number(this.price)) * 0.2);
      this.fullPrice = Math.floor(Number(this.importDuty) + Number(this.exciseDuty) + Number(this.VAT) + Number(this.price));
    }
    this.btnCall = true;
  }

  // validate begin
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

  validateBatery(): void {
    if (this.RegexService.validateNumber(this.batery)) {
      this.bateryErr = false;
    } else {
      this.bateryErr = true;
    }
  }
  // validate end

  public culcPrice(): void {
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
    if (this.RegexService.validateNumber(this.batery)) {
      this.bateryErr = false;
    } else {
      this.bateryErr = true;
    }

    if (!this.fuelErr && !this.countryErr && !this.ageErr && !this.priceErr && !this.engineErr) {
      this.calculator();

    } else if (this.fuel == 'electric' && !this.countryErr && !this.priceErr && !this.bateryErr) {
      this.calculator();
    } else if (this.fuel == 'gibrid' && !this.countryErr && !this.priceErr) {
      this.calculator();
    }
    else {
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
      "description": "Легкове авто",
      "message": `Ввізне мито - ${this.importDuty}, акцизне мито - ${this.exciseDuty}, ПДВ - ${this.VAT}, вартість авто з розмитненням - ${this.fullPrice}, вартість - ${this.price} об'єм моттору - ${this.engine}, вік авто - ${this.age}, країна походження - ${this.country}, повідомлення - ${form.value.messageCli}`
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
    this.bateryErr = false;

    this.fuelOk = false;
    this.countryOk = false;
    this.ageOk = false;
    this.priceOk = false;
    this.engineOk = false;
    this.bateryOk = false;

  }

}



