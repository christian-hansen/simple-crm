export class Order {
    amount: number;
    createDate: number;
    customerId: string;
    productId: string;


constructor (obj?:any) {
this.amount = obj ? obj.amount : "";
this.createDate = obj ? obj.createDate : 0;
this.customerId = obj ? obj.customerId : "";
this.productId = obj ? obj.productId : "";
}


public toJSON() {
    return {
        amount: this.amount,
        createDate: this.createDate,
        customerId: this.customerId,
        productId: this.productId
  }
}}