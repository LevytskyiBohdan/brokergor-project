import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.css']
})
export class MotorcycleComponent implements OnInit {
  formCheckBodyType: boolean = true;
  

  bodyType:string;
  country: number;
  age: number;
  price: number;
  engine: number;
  batery: number;

  importDuty: number;
  exciseDuty: number;
  VAT: number;
  fullPrice: number;


  constructor() { }

  ngOnInit() {
  }

  public bodyTypeChange():void{
    if(this.bodyType == 'motorcycle' || this.bodyType == 'scooter' || this.bodyType == 'moped'){
      this.formCheckBodyType = true;
    }else{
      this.formCheckBodyType = false;
    }  
  }


  public culcPrice():void{
    if(this.bodyType=="motorcycle"){
      // Мито
      if(this.engine >=51 && this.engine <= 125 && this.country == 1){
        this.importDuty = Math.floor(this.price*0.033);
      }else{
        this.importDuty = Math.floor(this.price*this.country);
      }

      // Акциз
      if(this.engine < 500){
        this.exciseDuty = Math.floor(this.engine*0.062);
      } else if(this.engine >= 500 && this.engine <= 800){
        this.exciseDuty = Math.floor(this.engine*0.443); 
      } else if(this.engine > 800){
        this.exciseDuty = Math.floor(this.engine*0.447); 
      }
      this.VAT = Math.floor((this.price+this.importDuty+this.exciseDuty)*0.2);
      this.fullPrice = Math.floor(this.importDuty + this.exciseDuty + this.VAT + this.price);
    }
    
    
    else if(this.bodyType=="fuelDisel"){
      
    }else if(this.bodyType == "electric"){
      
    } else{
      
    }  
  }
}
