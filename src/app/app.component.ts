import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'franchise';
  cartContents:any=[]
  username:any
  ngOnInit(): void {
    this.cartContents=this.us.userCart
    this.username=localStorage.getItem("username")
  }
  constructor(public us:UserService,){}
  userLogout(){
    localStorage.clear();
    this.us.userCart=[];
    this.cartContents=[];
    this.us.userLoginStatus=false;
    this.username=""
  }
}
