import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private hc: HttpClient) { }

  addItem(productObj: any): Observable<any> {
    return this.hc.post("/product/addproduct", productObj)


  }

  getMech(franchisename:any): Observable<any> {
    return this.hc.get(`/product/getproducts/${franchisename}`)
  }

}
