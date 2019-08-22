import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegexService } from 'src/app/shared/services/regex.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  email: string;
  phone: string;
  messageText: string;

  className: boolean = false;
  classEmail: boolean = false;
  classPhone: boolean = false;
  classMessage: boolean = false;

  classNameOk: boolean = false;
  classEmailOk: boolean = false;
  classPhoneOk: boolean = false;
  classMessageOk: boolean = false;

  constructor(private ToastrService: ToastrService, private RegexService: RegexService) { }

  ngOnInit() {
  }
  
  message():void{
    //@ts-ignore
    jivo_api.open();
  }
  

  validateName(): void {
    if (this.RegexService.validateName(this.name)) {
      this.classNameOk = true;
      this.className = false;
    } else {
      this.classNameOk = false;
      this.className = true;
    }
  }
  validateEmail(): void {
    if (this.RegexService.validateEmail(this.email)) {
      this.classEmailOk = true;
      this.classEmail = false;
    } else {
      this.classEmailOk = false;
      this.classEmail = true;
    }
  }
  validatePhone(): void {
    if (this.RegexService.validatePhone(this.phone)) {
      this.classPhoneOk = true;
      this.classPhone = false;
    } else {
      this.classPhoneOk = false;
      this.classPhone = true;
    }
  }
  validateMessage(): void {
    if (this.messageText != undefined && this.messageText.length > 30) {
      this.classMessageOk = true;
      this.classMessage = false;
    } else {
      this.classMessageOk = false;
      this.classMessage = true;
    }
  }
  sendMessage(form): void {
    // console.log(form.value);
    let checkName: boolean = false;
    let checkEmail: boolean = false;
    let checkPhone: boolean = false;
    let checkMessage: boolean = false;
    if (this.RegexService.validateName(form.value.name) && form.value.name != undefined) {
      checkName = true;
      this.className = false;
    } else {
      checkName = false;
      this.className = true;
    }
    if (form.value.email != undefined && this.RegexService.validateEmail(form.value.email)) {
      checkEmail = true;
      this.classEmail = false;
    } else {
      checkEmail = false;
      this.classEmail = true;
    }
    if (this.RegexService.validatePhone(form.value.phone) && form.value.phone != undefined) {
      checkPhone = true;
      this.classPhone = false;
    } else {
      checkPhone = false;
      this.classPhone = true;
    }
    if (form.value.messageText != undefined && form.value.messageText.length > 30) {
      checkMessage = true;
      this.classMessage = false;
    } else {
      checkMessage = false;
      this.classMessage = true;
    }

    if (checkName && checkEmail && checkPhone && checkMessage) {
      // @ts-ignore
      jivo_api.sendMessage({
        "name": form.value.name,
        "email": form.value.email,
        "phone": form.value.phone,
        "description": "Контакти. Повідомлення",
        "message": form.value.messageText,
      });
      // @ts-ignore
      jivo_api._sendIntroduce({
        "name": form.value.name,
        "email": form.value.email,
        "phone": form.value.phone,
      })
      form.reset();
      this.ToastrService.success('Наш представник невдовзі зв\'яжеться з вами', 'Повідомлення надіслано', {
        timeOut: 6000,
      })
      this.className = false;
      this.classEmail = false;
      this.classPhone = false;
      this.classMessage = false;

      this.classNameOk = false;
      this.classEmailOk = false;
      this.classPhoneOk = false;
      this.classMessageOk = false;
    } else {
      this.ToastrService.error('Заповніть форму', 'Помилка', {
        timeOut: 3000,
      });
    }
  }


}
