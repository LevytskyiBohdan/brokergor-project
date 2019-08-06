import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/shared/services/slider.service';
import { ISlide } from 'src/app/shared/interfaces/slide.interface';
import { ContactService } from 'src/app/shared/services/contact.service';
import { IContact } from 'src/app/shared/interfaces/contact.interface';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeContact: Array<IContact> = [];

  constructor(private SliderService: SliderService, private ContactService: ContactService) {
    this.getContact();
    this.getSlide();
   }

  ngOnInit() {
  }

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
  

}
