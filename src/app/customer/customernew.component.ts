import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Validators } from '@angular/forms';

import { FormControl,FormGroup} from '@angular/forms';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-customernew',
  standalone: false,
  templateUrl: './customernew.component.html',
  styleUrl: './customernew.component.css'
})
export class CustomernewComponent implements OnInit {

  cfrm:any;

  /**
   *
   */
  constructor(private csvr:CustomerService,private rt:Router) {
        
  }
  ngOnInit(): void {
  this.cfrm=new FormGroup({
    customerName:new FormControl("",[Validators.required]),
    address:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
   /* address:new FormGroup({
      houseno:new FormControl(),
      street:new FormControl(),
      city:new FormControl(),
      pincode:new FormControl()
    }), */
    emailID:new FormControl(null,[Validators.required,Validators.email]),
    mobileNo:new FormControl(null,[Validators.required,Validators.pattern("\\d{10}")]),
    creditLimit:new FormControl(null,[Validators.required,Validators.min(1000),Validators.max(10000)])
  });
  }

  SaveCustomer():void
  {
    //console.log(this.cfrm.value);
    this.csvr.createCustomer(this.cfrm.value)
    .subscribe({
      next:(result)=>{
       alert(result);
       this.rt.navigate(['/custs']);
      },
      error:(err)=> alert(JSON.stringify(err))
    });
  }
}
