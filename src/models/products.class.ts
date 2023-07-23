export class Product {
    productName: string;
    productIsActive: boolean;
    productPrice: number;
    orders: Array<any>;


constructor (obj?:any) {
this.productName = obj ? obj.productName : "";
this.productIsActive = obj ? obj.productIsActive : false;
this.productPrice = obj ? obj.productPrice : 0;
this.orders = obj && obj.orders ? obj.orders : []; 
}


public toJSON() {
    return {
        productName: this.productName,
        productIsActive: this.productIsActive,
        productPrice: this.productPrice,
        productOrders: this.orders,
    };
  }

}