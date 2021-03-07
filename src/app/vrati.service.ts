import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, map } from 'rxjs/operators';

import { Product, products } from './models/Product';
import { ProductSku, productSkus, ProductWithSkus } from './models/ProductSku';

@Injectable({
  providedIn: 'root'
})
export class VratiService {

  constructor() { }

  GetAllProducts(): Observable<Product[]> {
    return of(products);
  }

  GetAllProductSkus(): Observable<ProductSku[]> {
    return of(productSkus);
  }

  GetAllProductSkusWithDelay(): Observable<ProductSku[]> {
    return of(productSkus).pipe(delay(2000));
  }

  GetOneProduct(id: number): Observable<Product> {
    return of(products.find((p: Product): Boolean => p.id === id));
  }

  GetProductsWithSkus(): Observable<ProductWithSkus[]> {
    return this.GetAllProducts().pipe(
      mergeMap((x: Product[]): Observable<ProductWithSkus[]> => {
        return this.GetAllProductSkusWithDelay().pipe(
          map((y: ProductSku[]): ProductWithSkus[] => {
            return x.map((a: Product): ProductWithSkus => {
              return {
                ...a,
                productSkus: y.filter((b: ProductSku): Boolean => b.productId === a.id)
              }
            })
          })
        )
      })
    )
  }
 
}