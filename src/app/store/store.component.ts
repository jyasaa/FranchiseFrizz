import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public merchList:any=[]
  constructor( private ps:ProductService) { }
  ngOnInit(): void {
    this.ps.getMech().subscribe(
      data=>{
        console.log(data.message)
         this.merchList=data.message
      }
    ) 
  }

  

}
