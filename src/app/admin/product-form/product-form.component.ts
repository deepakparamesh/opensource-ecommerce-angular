import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<any>;
  product = {};
  id;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    this.categories$ = categoryService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id)  {
      this.productService.get(this.id).valueChanges().subscribe(p => this.product = p);
    }
  }

  save(product) {
    if (this.id) {
      this.productService.udpate(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (confirm('Are you sure want to delete ?')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
      return ;
    }
  }

  ngOnInit() {
    console.log(this.product);
  }



}
