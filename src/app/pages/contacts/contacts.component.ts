import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact: Array<IContact> = [];

  constructor(private COntactServiceIn: ContactService) { 
    this.getContact();
  }

  ngOnInit() {
  }

  private getContact(): void{
    this.COntactServiceIn.getContact().subscribe(
      data =>{
        this.contact = data;
      },
      err =>{
        console.log(err);
      }
    )
  }

}
