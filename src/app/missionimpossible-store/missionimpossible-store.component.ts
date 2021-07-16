import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-missionimpossible-store',
  templateUrl: './missionimpossible-store.component.html',
  styleUrls: ['./missionimpossible-store.component.css']
})
export class MissionimpossibleStoreComponent implements OnInit {

  products:any=[]
  constructor( private ps:ProductService) { }
  
  ngOnInit(): void {
    this.ps.getMech("Mission Impossible").subscribe(
      data=>{
        console.log(data.message.products)
         this.products=data.message.products
      }
    ) 
  }

}
