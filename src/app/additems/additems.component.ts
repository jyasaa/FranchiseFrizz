import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
declare let alertify: any;

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {

  constructor(private ps:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  
  onAdd(itemObj:any){
    console.log(itemObj)

      this.ps.addItem(itemObj).subscribe(
        res=>{
          if(res.message==="New product Added"){
            alertify.success("New product Added !")
  
            //navigate to login component
            //this.router.navigateByUrl("/login")
  
          }
          else{
            alertify.message(res.message)
          }
        },
        err=>{
          console.log(err)
          alertify.alert("Something Went Wrong in Product Creation")
        }
      )
      
    }
  }

