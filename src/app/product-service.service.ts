import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productList = PRODUCT_LIST;

  constructor() { }

  public getProductList(){
    return of(this.productList)
  }
  
  public filterProductList(itemVal: string): Promise <any>{

    return of(
      this.productList.filter( (product:any) => product.title.toLowerCase().indexOf(itemVal) > -1)
    ).toPromise()
  }
}

export const PRODUCT_LIST = [{
  'title': 'T-Shirt',
  'price': 3492
},
{
  'title': 'Shirt',
  'price': 1234
},
{
  'title': 'Jeans',
  'price': 1111
}]
