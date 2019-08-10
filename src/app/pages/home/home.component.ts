import { Component, OnInit, Inject } from '@angular/core';
import { SliderService } from 'src/app/shared/services/slider.service';
import { ContactService } from 'src/app/shared/services/contact.service';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeContact: Array<IContact> = [];

  constructor(public SliderService: SliderService, private ContactService: ContactService, private PageScrollService: PageScrollService, @Inject(DOCUMENT) private document:any) {
    this.getContact();
    this.getSlide();
   }

  ngOnInit() { }

  private getSlide(): void{
    this.SliderService.getSlide();
  }

  private getContact(): void{
    this.ContactService.getContact().subscribe(data =>{
      this.homeContact = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as IContact;
      })
    })
  }
  
  message():void{
    //@ts-ignore
    jivo_api.open();
  }

  scrollTo():void{
    
    this.PageScrollService.scroll({
      document: this.document,
      scrollTarget: '.scrollTo'
    })
  }

}
