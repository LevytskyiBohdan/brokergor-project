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
  phone: string;
  email: string;

  constructor(private ContactService: ContactService) {
    this.getContact();
   }

  ngOnInit() {
  }

  // private getContact(): void{
  //   this.ContactServiceIn.getContact().subscribe(
  //     data => {
  //       this.adminContact = data;
  //       this.id = this.adminContact[0].id;
  //       this.tel = this.adminContact[0].tel;
  //       this.email = this.adminContact[0].email;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

  private getContact(): void{
    this.ContactService.getContact().subscribe(
      data =>{
        this.adminContact = data.map(item =>{
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as IContact;
        });
        this.id = this.adminContact[0].id;
        this.phone = this.adminContact[0].phone;
        this.email = this.adminContact[0].email;
      }
    )
  }

  public isSaveEdit(): void{
    this.ContactService.editContact(this.id, this.phone, this.email);
  }
  // private getContact(): void{
  //   this.ContactService.getContact().subscribe(data =>{
  //     this.homeContact = data.map(item => {
  //       return {
  //         id: item.payload.doc.id,
  //         ...item.payload.doc.data()
  //       } as IContact;
  //     })
  //   })
  // }


  // public isSaveEdit(): void{
  //   const newContact: IContact = new NewContact(
  //     0,
  //     this.phone,
  //     this.email,
  //   );
  //   this.phone = '';
  //   this.email = '';
  //   this.ContactService.editContact(newContact).subscribe(
  //     ()=>{
  //       this.getContact();
  //     }
  //   )
  // }





}
