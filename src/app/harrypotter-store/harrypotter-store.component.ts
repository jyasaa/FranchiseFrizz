import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-harrypotter-store',
  templateUrl: './harrypotter-store.component.html',
  styleUrls: ['./harrypotter-store.component.css']
})
export class HarrypotterStoreComponent implements OnInit {

  products:any=[]
  constructor( private ps:ProductService) { }
  ngOnInit(): void {
    this.ps.getMech("Harry Potter").subscribe(
      data=>{
        console.log(data.message.products)
         this.products=data.message.products
      }
    ) 
  }

  
}
