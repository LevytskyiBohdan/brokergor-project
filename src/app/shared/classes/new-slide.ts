import { ISlide } from '../interfaces/slide.interface';

export class NewSlide implements ISlide {
    constructor(
        public id: string,
        public firstTitle: string,
        public secondTitle: string,
        public image: string, 
        public imageSM: string,   
    ){}
}
