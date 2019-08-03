import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { ContactService } from 'src/app/shared/services/contact.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ThemeService],
})
export class HeaderComponent implements OnInit {
  headerContact: Array<IContact> = [];

  id: number;
  tel: string;
  email: string;

  siteTheme: any = false;

  constructor(private ContactServiceIn: ContactService, private ThemeService: ThemeService) {
    
   }

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

  toggleTheme(x):void{}
}
