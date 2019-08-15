import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { ContactService } from 'src/app/shared/services/contact.service';
import { RegexService } from 'src/app/shared/services/regex.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact: Array<IContact> = [];

  name: string;
  email: string;
  phone: string;
  message: string;

  className: boolean = false;
  classEmail: boolean = false;
  classPhone: boolean = false;
  classMessage: boolean = false;

  constructor(private ContactService: ContactService, private RegexService: RegexService) { }

  ngOnInit() {
    this.getContact();
  }

  private getContact(): void{
    this.ContactService.getContact().subscribe(actionArray => {
      this.contact = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as IContact;
      })
    });
  }

  sendMessage(form): void {
    console.log(form.value);
    let checkName: boolean = false;
    let checkEmail: boolean = false;
    let checkPhone: boolean = false;
    let checkMessage: boolean = false;
    if (this.RegexService.validateName(form.value.name) && form.value.name != undefined){
      checkName = true;
      this.className = false;
    } else {
      checkName = false;
      this.className = true;
    }
    if (form.value.email != undefined && this.RegexService.validateEmail(form.value.email)){
      checkEmail = true;
      this.classEmail = false;
    } else {
      checkEmail = false;      
      this.classEmail = true;
    }
    if (this.RegexService.validatePhone(form.value.phone) && form.value.phone != undefined){
      checkPhone = true;
      this.classPhone = false;
    } else {
      checkPhone = false;      
      this.classPhone = true;
    }
    if (form.value.message != undefined){
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
          "message": form.value.message,
        });
        // @ts-ignore
        jivo_api._sendIntroduce({
          "name": form.value.name,
          "email": form.value.email,
          "phone": form.value.phone,
        })
        form.reset();
    }
  }

}
