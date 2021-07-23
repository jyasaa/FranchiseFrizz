import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { PaymentService } from '../payment.service';
import { UserService } from '../user.service';
declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  @Input() productObj:any;

  //console.log("Hi");
  constructor(public us:UserService,public router:Router,private pays:PaymentService){}
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
    if(cartObj.quantity==0){
      alertify.alert("Please select atleast one item!")
    }
    else{
      this.us.userCart.push(newCartObj)
    }
    
  }




  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", 
    "amount": "500", 
    "currency": "INR",
    "name": "Franchise Frizz",
    "description": "Complete Your Payment",
    "image": "",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    // "handler": function (response){
    //     alert(response.razorpay_payment_id);
    //     alert(response.razorpay_order_id);
    //     alert(response.razorpay_signature)
    // },
    "prefill": {
        "name": "",
        "email": "",
        "contact": ""
    },
    "notes": {
        "address": ""
    },
    "theme": {
        "color": "#fcde67"
    }
  };
  
  rzp1: any;
  pay(){
    let cost = this.productObj.cost*100
    this.options.amount=cost.toString(10)
     this.rzp1 = new this.pays.nativeWindow.Razorpay(this.options);
      this.rzp1.open();
    }




    
}