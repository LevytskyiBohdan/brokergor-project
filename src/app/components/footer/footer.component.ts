import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { ContactService } from 'src/app/shared/services/contact.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

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

  siteTheme: boolean = false;

  constructor(private ContactServiceIn: ContactService, private ThemeService: ThemeService) { 
    
  }

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
