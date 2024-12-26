import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customernew',
  standalone: false,
  
  templateUrl: './customernew.component.html',
  styleUrl: './customernew.component.css'
})
export class CustomernewComponent implements OnInit {

  cfrm:any;

  ngOnInit(): void {
  this.cfrm=new FormGroup({
    customerName:new FormControl(),
    address:new FormControl(),
    email:new FormControl(),
    mobileNo:new FormControl(),
    creditLimit:new FormControl()
  });
  }

  SaveCustomer():void
  {
    console.log(this.cfrm.value);
  }
}
