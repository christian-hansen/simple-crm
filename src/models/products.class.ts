export class Product {
    productName: string;
    productIsActive: boolean;
    productPrice: number;
    productImage: string;
    productOrders: Array<any>;


constructor (obj?:any) {
this.productName = obj ? obj.productName : "";
this.productIsActive = obj ? obj.productIsActive : false;
this.productPrice = obj ? obj.productPrice : 0;
this.productImage = obj ? obj.productImage : "";
this.productOrders = obj && obj.productOrders ? obj.productOrders : []; 
}


public toJSON() {
    return {
        productName: this.productName,
        productIsActive: this.productIsActive,
        productPrice: this.productPrice,
        productImage: this.productImage,
        productOrders: this.productOrders,
    };
  }

}