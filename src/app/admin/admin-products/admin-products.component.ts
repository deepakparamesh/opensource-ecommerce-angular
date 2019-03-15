import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: {title: string} ;
  subscription: Subscription;
  filteredProducts: any;

  constructor(private productService: ProductService) {
     this.subscription = this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
   }

  filter(query: string) {
     console.log(query);
     this.filteredProducts = (query) ?
      this.products.filter(p => p.title);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
