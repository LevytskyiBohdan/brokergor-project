import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerContact: Array<IContact> = [];
  id: number;
  tel: string;
  email: string;

  constructor(private ContactServiceIn: ContactService) { }

  ngOnInit() {
    this.getContact();
  }

  getContact(): void{
    this.ContactServiceIn.getContact().subscribe(
      data =>{
        this.footerContact = data;
      },
      err =>{
        console.log(err);
      }
    )
  }


}
