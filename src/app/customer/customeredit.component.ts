import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-customeredit',
  standalone: false,
  
  templateUrl: './customeredit.component.html',
  styleUrl: './customeredit.component.css'
})
export class CustomereditComponent implements OnInit {
   cid:number=0;
   cfrm:any;
   constructor(private art:ActivatedRoute,private fb:FormBuilder,private custsvr:CustomerService,private rt:Router)
   {}

   ngOnInit(): void {

    this.cfrm=this.fb.group({
      customerID:[],
      customerName:[],
      address:[],
      emailID:[],
      mobileNo:[],
      creditLimit:[]
   });

      this.cid=Number(this.art.snapshot.paramMap.get('cid')); 

      this.custsvr.getByCustomerID(this.cid).subscribe(
      {
       next:result=>{
        // alert(JSON.stringify(result));
         this.cfrm.patchValue(result);
       },
       error:err=>alert(JSON.stringify(err))
      }
      );
     // alert(this.cid);

    
   }

   EditCustomer():void{
     this.custsvr.editCustomer(this.cfrm.value)
     .subscribe({
      next:result=> {
        alert("Customer Updated!");
        this.rt.navigate(['/custs']);
      },
      error:err=>alert(JSON.stringify(err))
     });
   }

}
