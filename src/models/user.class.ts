export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    country: string;
    createDate: number;
    orders: Array<any>;


    constructor (obj?:any) {
        this.firstName = obj ? obj.firstName : "";
        this.lastName = obj ? obj.lastName : "";
        this.email = obj ? obj.email : "";
        this.birthDate = obj ? obj.birthDate : 0;
        this.street = obj ? obj.street : "";
        this.zipCode = obj ? obj.zipCode : 0;
        this.city = obj ? obj.city : "";
        this.country = obj ? obj.country : "";
        this.createDate = obj ? obj.createDate : 0;
        this.orders = obj && obj.orders ? obj.orders : [];
    }


public toJSON() {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        birthDate: this.birthDate,
        street: this.street,
        zipCode: this.zipCode,
        city: this.city,
        country: this.country,
        createDate: this.createDate,
        orders: this.orders
    };
  }

}