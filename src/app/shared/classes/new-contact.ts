import { IContact } from '../interfaces/contact.interface';

export class NewContact implements IContact {
    constructor (
        public id: number,
        public phone: string,
        public email: string,
    ){}
}
