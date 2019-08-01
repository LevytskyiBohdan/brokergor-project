import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/shared/services/slider.service';
import { ISlide } from 'src/app/shared/interfaces/slide.interface';
import { ContactService } from 'src/app/shared/services/contact.service';
import { IContact } from 'src/app/shared/interfaces/contact.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slider: Array<ISlide> = [];
  homeContact: Array<IContact> = [];

  constructor(private SliderServiceIn: SliderService, private ContactServiceIn: ContactService) {
    this.getSlide();
    this.getContact();
   }

  ngOnInit() {
  }
  
  private getSlide(): void{
    this.SliderServiceIn.getSlide().subscribe(
      data =>{
        this.slider = data;
      },
      err =>{
        console.log(err);
      }
    )
  }

  private getContact(): void{
    this.ContactServiceIn.getContact().subscribe(
      data =>{
        this.homeContact = data;
      },
      err =>{
        console.log(err);
      }
    )
  }

}
