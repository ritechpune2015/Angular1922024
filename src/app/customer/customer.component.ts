import { Component,OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { ICustomer } from './icustomer';
@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit 
{

  custs:ICustomer [];
  constructor(private csvr:CustomerService)
  {
    this.custs=[];
  }
  ngOnInit(): void {
   this.csvr.getAllCustomers().subscribe(
    {
     next:(result)=> this.custs=result,
     error:(err)=>alert(JSON.stringify(err))
     }  
   );
  }

}
