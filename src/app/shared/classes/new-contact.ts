import { IContact } from '../interfaces/contact.interface';

export class NewContact implements IContact {
    constructor (
        public id: number,
        public tel: string,
        public email: string,
    ){}
}
