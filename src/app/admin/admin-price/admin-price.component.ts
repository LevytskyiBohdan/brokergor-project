import { Component, OnInit } from '@angular/core';
import { IPrice } from 'src/app/shared/interfaces/price.interface';
import { PriceService } from 'src/app/shared/services/price.service';
import { NewPrice } from 'src/app/shared/classes/new-price';



@Component({
  selector: 'app-admin-price',
  templateUrl: './admin-price.component.html',
  styleUrls: ['./admin-price.component.css']
})
export class AdminPriceComponent implements OnInit {
  adminPrice: Array<IPrice> = [];
  price: number;
  description: string;
  editStatus: boolean = false;
  editID: number;

  constructor(private priceServiceIn: PriceService) { }

  ngOnInit() {
    this.getPrice();
  }

  private getPrice(): void {
    this.priceServiceIn.getPrice().subscribe(
      data => {
        this.adminPrice = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  public isAddPrice(): void {
    const newPrice: IPrice = new NewPrice(
      0,
      this.description,
      this.price,
    );
    newPrice.id = this.adminPrice.slice(-1)[0].id + 1;

    this.priceServiceIn.addPrice(newPrice).subscribe(
      () => {
        this.getPrice();
      });

    this.price = null;
    this.description = '';
  }

  public isDeletePrice(price: IPrice): void {
    const id = price.id;
    this.priceServiceIn.deletePrice(id).subscribe(
      () => {
        this.getPrice();
      }
    )
  }

  public isEditPrice(price: IPrice): void {
    console.log(price)
    this.editStatus = true;
    this.price = price.priceDescription;
    this.description = price.serviceDescription;
    this.editID = price.id;
  }

  public isSaveEditPrice(): void {
    const newPrice: IPrice = new NewPrice(
      this.editID,
      this.description,
      this.price,
    );
    this.price = null;
    this.description = '';
    this.priceServiceIn.editPrice(newPrice).subscribe(() => {
      this.getPrice();
    })
    this.editStatus = false;
  }

}
