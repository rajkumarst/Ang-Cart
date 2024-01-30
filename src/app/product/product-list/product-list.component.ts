import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) { }
  products!: any;

  products$ = this.productService.getProducts().pipe(
    map(data => data.drinks)
  );

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      // console.log(products);
    });
  }
}
