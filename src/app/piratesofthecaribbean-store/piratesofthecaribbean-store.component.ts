import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-piratesofthecaribbean-store',
  templateUrl: './piratesofthecaribbean-store.component.html',
  styleUrls: ['./piratesofthecaribbean-store.component.css']
})
export class PiratesofthecaribbeanStoreComponent implements OnInit {

  products:any=[]
  constructor( private ps:ProductService) { }
  
  ngOnInit(): void {
    this.ps.getMech("Pirates Caribbean").subscribe(
      data=>{
        console.log(data.message.products)
         this.products=data.message.products
      }
    ) 
  }


}
