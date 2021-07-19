import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public us:UserService,private router:Router) { }
  
  cartContents:any=[]
  totalCost:number= 0;
  ngOnInit(): void {
    this.cartContents=this.us.userCart
    console.log(this.cartContents)

    if (this.cartContents.length === 0) {
      //alertify.alert("Your Cart is Empty")
      alert("Your Cart is Empty!")
      this.router.navigateByUrl("/store")
    }

    for (let item of this.cartContents) {
      this.totalCost = this.totalCost + item.quantity*item.cost;
      }
    console.log(this.totalCost)
  }
  

}
