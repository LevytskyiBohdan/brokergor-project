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

  id: string;
  tel: string;
  email: string;

  siteTheme: any = false;

  constructor(private ContactService: ContactService, public ThemeService: ThemeService) {
    
   }

  ngOnInit() {
    this.getContact();
  }

  private getContact(): void{
    this.ContactService.getContact().subscribe(actionArray => {
      this.headerContact = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as IContact;
      })
    });
  }

  themeToggle(x): void{   
    this.ThemeService.themeToggle(x);
  }
}
