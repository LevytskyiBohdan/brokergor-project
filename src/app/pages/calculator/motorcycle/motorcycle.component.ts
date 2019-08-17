import { Component, OnInit } from '@angular/core';
import { RegexService } from 'src/app/shared/services/regex.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.css']
})
export class MotorcycleComponent implements OnInit {
  formCheckBodyType: boolean = true;

  btnCall: boolean = false;

  nameCli: string;
  emailCli: string;
  phoneCli: string;
  messageCli: string;

  bodyType: string;
  country: number;
  price: number;
  engine: number;

  bodyTypeErr: boolean = false;
  countryErr: boolean = false;
  priceErr: boolean = false;
  engineErr: boolean = false;

  bodyTypeOk: boolean = false;
  countryOk: boolean = false;
  priceOk: boolean = false;
  engineOk: boolean = false;

  importDuty: number;
  exciseDuty: number;
  VAT: number;
  fullPrice: number;


  constructor(private RegexService: RegexService, private ToastrService: ToastrService) { }

  ngOnInit() {
  }

  public bodyTypeChange(): void {
    if (this.bodyType == 'motorcycle' || this.bodyType == 'scooter' || this.bodyType == 'moped') {
      this.formCheckBodyType = true;
    } else {
      this.formCheckBodyType = false;
    }
  }

  public culculator(): void {
    this.price = Number(this.price);
    this.engine = Number(this.engine);
    if (this.bodyType == "motorcycle") {
        // Мито
      if (this.engine >= 51 && this.engine <= 125 && this.country == 1) {
        this.importDuty = Math.floor(this.price * 0.033);
      } else {
        this.importDuty = Math.floor(this.price * this.country);
      }

        // Акциз
      if (this.engine < 500) {
        this.exciseDuty = Math.floor(this.engine * 0.062);
      } else if (this.engine >= 500 && this.engine <= 800) {
        this.exciseDuty = Math.floor(this.engine * 0.443);
      } else if (this.engine > 800) {
        this.exciseDuty = Math.floor(this.engine * 0.447);
      }
      this.VAT = Math.floor((this.price + this.importDuty + this.exciseDuty) * 0.2);
      this.fullPrice = Math.floor(this.importDuty + this.exciseDuty + this.VAT + this.price);
    }


    else if (this.bodyType == "scooter") {
        // Мито
      if (this.engine >= 50 && this.engine <= 250 && this.country == 1) {
        this.importDuty = Math.floor(this.price * 0.033);
      } else {
        this.importDuty = Math.floor(this.price * this.country);
      }
        // Акциз
      if (this.engine < 500) {
        this.exciseDuty = Math.floor(this.engine * 0.062);
      } else if (this.engine >= 500 && this.engine <= 800) {
        this.exciseDuty = Math.floor(this.engine * 0.443);
      } else if (this.engine > 800) {
        this.exciseDuty = Math.floor(this.engine * 0.447);
      }
      this.VAT = Math.floor((this.price + this.importDuty + this.exciseDuty) * 0.2);
      this.fullPrice = Math.floor(this.importDuty + this.exciseDuty + this.VAT + this.price);

    } else if (this.bodyType == "moped") {
        // Мито
      if (this.engine >= 50 && this.engine <= 250 && this.country == 1) {
        this.importDuty = Math.floor(this.price * 0);
      } else {
        this.importDuty = Math.floor(this.price * this.country);
      }
        // Акциз
      if (this.engine < 500) {
        this.exciseDuty = Math.floor(this.engine * 0.062);
      } else if (this.engine >= 500 && this.engine <= 800) {
        this.exciseDuty = Math.floor(this.engine * 0.443);
      } else if (this.engine > 800) {
        this.exciseDuty = Math.floor(this.engine * 0.447);
      }
      this.VAT = Math.floor((this.price + this.importDuty + this.exciseDuty) * 0.2);
      this.fullPrice = Math.floor(this.importDuty + this.exciseDuty + this.VAT + this.price);
    } else if (this.bodyType == "electricBike" || this.bodyType == "electricMotorcycle") {
       // Мито
       if (this.country == 0.05) {
        this.importDuty = Math.floor(this.price * 0.05);
      } else if(this.country == 0.1){
        this.importDuty = Math.floor(this.price * 0.1);
      } else{
        this.importDuty = Math.floor(this.price * this.country);
      }
        // Акциз
        this.exciseDuty = 22;

      this.VAT = Math.floor((this.price + this.importDuty + this.exciseDuty) * 0.2);
      this.fullPrice = Math.floor(this.importDuty + this.exciseDuty + this.VAT + this.price);
    }
    this.btnCall = true;
  }

  validateBodyType(): void {
    if(this.bodyType != undefined){
      this.bodyTypeErr = false;
      this.bodyTypeOk = true;
    } else {
      this.bodyTypeErr = true;
      this.bodyTypeOk = false;
    }
  }
  validateCountry(): void {
    if(this.country != undefined){
      this.countryErr = false;
      this.countryOk = true;
    } else {
      this.countryErr = true;
      this.countryOk = false;
    }
  }
  validatePrice(): void {
    if (this.RegexService.validateNumber(this.price)){
      this.priceErr = false;
      this.priceOk = true;
    } else {
      this.priceErr = true;
      this.priceOk = false;
    }
  }
  validateEngine(): void {
    if (this.RegexService.validateNumber(this.engine)){
      this.engineErr = false;
      this.engineOk = true;
    } else {
      this.engineErr = true;
      this.engineOk = false;
    }
  }

  public culcPrice(): void {
    if(this.bodyType != undefined){
      this.bodyTypeErr = false;
    } else {
      this.bodyTypeErr = true;
    }
    if(this.country != undefined){
      this.countryErr = false;
    } else {
      this.countryErr = true;
    }
    if (this.RegexService.validateNumber(this.price)){
      this.priceErr = false;
    } else {
      this.priceErr = true;
    }
    if (this.RegexService.validateNumber(this.engine)){
      this.engineErr = false;
    } else {
      this.engineErr = true;
    }
    if((this.bodyType == 'motorcycle'||this.bodyType == 'scooter'||this.bodyType == 'moped') && !this.countryErr && !this.priceErr && !this.engineErr){
      this.culculator();
    } else if((this.bodyType == 'electricBike' || this.bodyType == 'electricMotorcycle') && !this.countryErr && !this.priceErr){
      this.culculator();
    } else {
      this.ToastrService.error('Заповніть форму', 'Помилка', {
        timeOut: 4000,
      })
    }
  }

  


  sendMessage(form):void{
    // @ts-ignore
    jivo_api.sendMessage({
      "name": form.value.nameCli,
      "email": form.value.emailCli,
      "phone": form.value.phoneCli,
      "description": "Мотоцикли",
      "message": `Ввізне мито - ${this.importDuty}, акцизне мито - ${this.exciseDuty}, ПДВ - ${this.VAT}, вартість авто з розмитненням - ${this.fullPrice}, вартість авто - ${this.price} об'єм моттору - ${this.engine}, країна походження - ${this.country}, повідомлення - ${form.value.messageCli}`
    });
    // @ts-ignore
    jivo_api._sendIntroduce({
      "name": form.value.nameCli,
      "email": form.value.emailCli,
      "phone": form.value.phoneCli,
    })
    
  }



}
