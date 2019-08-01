import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerContact: Array<IContact> = [];

  id: number;
  tel: string;
  email: string;

  siteThem: boolean = false;

  constructor(private ContactServiceIn: ContactService) { }

  ngOnInit() {
    this.getContact();
  }

  getContact(): void {
    this.ContactServiceIn.getContact().subscribe(
      data => {
        this.headerContact = data
      },
      err => {
        console.log(err);
      })
  }

  showConsol(x): void{
    console.log(x);
    
  }


}
