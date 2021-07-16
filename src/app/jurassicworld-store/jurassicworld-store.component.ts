import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-jurassicworld-store',
  templateUrl: './jurassicworld-store.component.html',
  styleUrls: ['./jurassicworld-store.component.css']
})
export class JurassicworldStoreComponent implements OnInit {

  products:any=[]
  constructor( private ps:ProductService) { }
  
  ngOnInit(): void {
    this.ps.getMech("Jurassic World").subscribe(
      data=>{
        console.log(data.message.products)
         this.products=data.message.products
      }
    ) 
  }

}
