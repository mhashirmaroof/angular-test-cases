import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  searchText:any;
  productList:any = [];

  constructor(private productservice: ProductServiceService) { }

  ngOnInit() {
    this.productservice.getProductList().subscribe((data:any) => {
      this.productList = data;
    })
  }

  filterProductList(item:any){
    let value = this.searchText;
    this.productservice.filterProductList(value).then((data:any) => {
      this.productList = data;
    })
  }

}
