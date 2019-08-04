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

  constructor(private ContactService: ContactService) { 
    
  }

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

}
