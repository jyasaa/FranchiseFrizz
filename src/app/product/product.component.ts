import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  @Input() productObj:any;

  //console.log("Hi");
  constructor(public us:UserService,public router:Router){}
  onOrder(){

    if(!this.us.userLoginStatus){

      this.router.navigateByUrl("/login")
    }
    
     
  }

  onAddToCart(cartObj:any){
    // this.us.userCart.push(this.productObj)
    // console.log(this.us.userCart)
    let newCartObj=this.productObj
    newCartObj['quantity']=cartObj.quantity
    //console.log(newCartObj)
    if(newCartObj.quantity===0){
      alert("Please select atleast one item!")
    }
    else{
      this.us.userCart.push(newCartObj)
    }
    
  }
}