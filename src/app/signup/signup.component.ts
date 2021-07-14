import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onSignup(userObj:any){
    this.us.createUser(userObj).subscribe(
      res=>{
        if(res.message==="User created"){
          alert("User Created")
          //navigate to login component
          this.router.navigateByUrl("/login")

        }
        else{
          alert(res.message)
        }
      },
      err=>{
        console.log(err)
        alert("Something Went Wrong in user Creation")
      }
    )
    
  }


}
