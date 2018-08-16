import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  productUrl = 'http://localhost:3000/products';

  getProducts(): Observable<any> {
    return this.http.get(this.productUrl).pipe(map(res => { res }));
  }
}
