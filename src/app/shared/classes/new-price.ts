import { IPrice } from '../interfaces/price.interface';

export class NewPrice implements IPrice{
    constructor(
        public id:number,
        public serviceDescription: string,
        public priceDescription: number,
    ){}
}
