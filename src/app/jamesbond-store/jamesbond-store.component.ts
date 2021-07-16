import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-jamesbond-store',
  templateUrl: './jamesbond-store.component.html',
  styleUrls: ['./jamesbond-store.component.css']
})
export class JamesbondStoreComponent implements OnInit {

  products:any=[]
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.getMech("James Bond").subscribe(
      data=>{
        console.log(data.message.products)
         this.products=data.message.products
      }
    ) 
  }

}
