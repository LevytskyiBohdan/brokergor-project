import { Component, OnInit } from '@angular/core';
import { IPrice } from 'src/app/shared/interfaces/price.interface';
import { PriceService } from 'src/app/shared/services/price.service';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
  providers: [PriceService],
})
export class PriceComponent implements OnInit {
  price: Array<IPrice> = [];
  constructor(private PriceServiceIn: PriceService) { 
    this.getPrice();
  }

  ngOnInit() {
  }
  private getPrice(): void{
    this.PriceServiceIn.getPrice().subscribe(
      data =>{
        this.price = data;
        // console.log(data);
      },
      err =>{
        console.log(err);
      }
    );
  };



}
