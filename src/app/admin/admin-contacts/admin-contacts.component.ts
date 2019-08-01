import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { ContactService } from 'src/app/shared/services/contact.service';
import { NewContact } from 'src/app/shared/classes/new-contact';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.css']
})
export class AdminContactsComponent implements OnInit {
  adminContact: Array<IContact> = [];

  id: number;
  tel: string;
  email: string;

  constructor(private ContactServiceIn: ContactService) {
    this.getContact();
   }

  ngOnInit() {
  }

  private getContact(): void{
    this.ContactServiceIn.getContact().subscribe(
      data => {
        this.adminContact = data;
        this.id = this.adminContact[0].id;
        this.tel = this.adminContact[0].tel;
        this.email = this.adminContact[0].email;
      },
      err => {
        console.log(err);
      }
    )
  }

  public isSaveEdit(): void{
    const newContact: IContact = new NewContact(
      0,
      this.tel,
      this.email,
    );
    this.tel = '';
    this.email = '';
    this.ContactServiceIn.editContact(newContact).subscribe(
      ()=>{
        this.getContact();
      }
    )
  }


}
