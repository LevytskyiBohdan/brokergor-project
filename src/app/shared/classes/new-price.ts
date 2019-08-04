import { IPrice } from '../interfaces/price.interface';

export class NewPrice implements IPrice{
    constructor(
        public id:string,
        public serviceDescription: string,
        public priceDescription: number,
    ){}
}
