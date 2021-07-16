import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-johnwick-store',
  templateUrl: './johnwick-store.component.html',
  styleUrls: ['./johnwick-store.component.css']
})
export class JohnwickStoreComponent implements OnInit {

  products:any=[]
  constructor( private ps:ProductService) { }
  
  ngOnInit(): void {
    this.ps.getMech("John Wick").subscribe(
      data=>{
        console.log(data.message.products)
         this.products=data.message.products
      }
    ) 
  }

}
