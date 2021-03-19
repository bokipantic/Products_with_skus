import { Component, OnInit } from '@angular/core';
import { VratiService } from '../vrati.service';
import { Product } from '../models/Product';
import { ProductSku, ProductWithSkus } from '../models/ProductSku';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private serviceProduct: VratiService) { }

  // products: Product[];
  // skus: ProductSku[];
  // skusDelay: ProductSku[];
  // product: Product;
  productsWithSkus: ProductWithSkus[];

  // listOfAllProducts(): void {
  //   this.serviceProduct.GetAllProducts().subscribe(v => this.products = v);
  // }
  // listOfAllProductSkus(): void {
  //   this.serviceProduct.GetAllProductSkus().subscribe(v => this.skus = v);
  // }
  // listOfAllProductSkusWithDelay(): void {
  //   this.serviceProduct.GetAllProductSkusWithDelay().subscribe(v => this.skusDelay = v);
  // }
  // listOneProduct(): void {
  //   const id = Math.floor(Math.random() * 3) + 1;
  //   this.serviceProduct.GetOneProduct(id).subscribe(v => this.product = v);
  // }
  listOfProductsWithSkus(): void {
    this.serviceProduct.GetProductsWithSkus().subscribe(v => this.productsWithSkus = v);
  }

  ngOnInit(): void {
    // this.listOfAllProducts();
    // this.listOfAllProductSkus();
    // this.listOfAllProductSkusWithDelay();
    // this.listOneProduct();
    this.listOfProductsWithSkus();
  }

}
