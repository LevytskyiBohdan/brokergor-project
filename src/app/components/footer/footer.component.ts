import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { ContactService } from 'src/app/shared/services/contact.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ThemeService],
})
export class FooterComponent implements OnInit {
  footerContact: Array<IContact> = [];
  id: string;
  tel: string;
  email: string;

  siteTheme: boolean = false;

  constructor(private ContactService: ContactService, public ThemeService: ThemeService) { 
    
  }

  ngOnInit() {
    this.getContact();
  }

  private getContact(): void{
    this.ContactService.getContact().subscribe(actionArray => {
      this.footerContact = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as IContact;
      })
    });
  }

  message():void{
    //@ts-ignore
    jivo_api.open();
  }



}
