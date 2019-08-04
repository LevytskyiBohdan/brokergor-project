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
  priceDescription: number;
  serviceDescription: string;
  editStatus: boolean = false;
  editID: string;

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    this.getPrice();
  }

  private getPrice(): void{
    this.priceService.getPrice().subscribe(actionArray => {
      this.adminPrice = actionArray.map(item => {
        
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as IPrice;
      })
    });
    
  };

  public isAddPrice(form): void {
    this.priceService.addPrice(form);
    this.priceDescription = null;
    this.serviceDescription = '';
  }

  public isEditPrice(form: IPrice): void{
    this.editStatus = true;
    this.priceDescription = form.priceDescription;
    this.serviceDescription = form.serviceDescription;
    this.editID = form.id;
  }

  public isSaveEditPrice(form:IPrice){
    this.priceService.saveEdit(form, this.editID);
    this.editStatus = false;
    this.priceDescription = null;
    this.serviceDescription = '';
    this.editID = '';
  }

  public isDeletePrice(item:IPrice): void{
    // console.log(item.id);
    this.priceService.deletePrice(item.id);
  }



  // private getPrice(): void {
  //   this.priceServiceIn.getPrice().subscribe(
  //     data => {
  //       this.adminPrice = data;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  // public isAddPrice(): void {
  //   const newPrice: IPrice = new NewPrice(
  //     0,
  //     this.description,
  //     this.price,
  //   );
  //   newPrice.id = this.adminPrice.slice(-1)[0].id + 1;

  //   this.priceServiceIn.addPrice(newPrice).subscribe(
  //     () => {
  //       this.getPrice();
  //     });

  //   this.price = null;
  //   this.description = '';
  // }

  // public isDeletePrice(price: IPrice): void {
  //   const id = price.id;
  //   this.priceServiceIn.deletePrice(id).subscribe(
  //     () => {
  //       this.getPrice();
  //     }
  //   )
  // }

  // public isEditPrice(price: IPrice): void {
  //   console.log(price)
  //   this.editStatus = true;
  //   this.price = price.priceDescription;
  //   this.description = price.serviceDescription;
  //   this.editID = price.id;
  // }

  // public isSaveEditPrice(): void {
  //   const newPrice: IPrice = new NewPrice(
  //     this.editID,
  //     this.description,
  //     this.price,
  //   );
  //   this.price = null;
  //   this.description = '';
  //   this.priceServiceIn.editPrice(newPrice).subscribe(() => {
  //     this.getPrice();
  //   })
  //   this.editStatus = false;
  // }

}
