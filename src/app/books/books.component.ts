import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  products:any=[]
  constructor( private ps:ProductService,private pays:PaymentService) { }

  ngOnInit(): void {

}

//  options = {
//   "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
//   "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//   "currency": "INR",
//   "name": "Franchise Frizz",
//   "description": "Complete Your Payment",
//   "image": "",
//   "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//   // "handler": function (response){
//   //     alert(response.razorpay_payment_id);
//   //     alert(response.razorpay_order_id);
//   //     alert(response.razorpay_signature)
//   // },
//   "prefill": {
//       "name": "",
//       "email": "",
//       "contact": ""
//   },
//   "notes": {
//       "address": ""
//   },
//   "theme": {
//       "color": "#fcde67"
//   }
// };

// rzp1: any;
// pay(){
//    this.rzp1 = new this.pays.nativeWindow.Razorpay(this.options);
//     this.rzp1.open();
//   }

}