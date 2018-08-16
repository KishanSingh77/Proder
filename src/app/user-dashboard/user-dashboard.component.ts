import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'userDashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  products = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getAllProducts() {
    this.productService.getProducts().subscribe(product => {
      this.products.push(product);
      console.log(product);
    });
  }
}
