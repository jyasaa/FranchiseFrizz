import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public us:UserService) { }
  cartContents:any=[]
  ngOnInit(): void {
     this.cartContents=this.us.userCart
    console.log(this.cartContents)
  }

}
