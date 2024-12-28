import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customerdelete',
  standalone: false,
  templateUrl: './customerdelete.component.html',
  styleUrl: './customerdelete.component.css'
})
export class CustomerdeleteComponent implements OnInit {
   cid:number=0;
   custrec:any;
   
   constructor(private art:ActivatedRoute,private csvr:CustomerService,private rt:Router)
   {
    
   }
   ngOnInit(): void {
     this.cid = Number(this.art.snapshot.paramMap.get('cid'));
     this.csvr.getByCustomerID(this.cid)
     .subscribe({
      next:result=>this.custrec=result,
      error:err=>alert(JSON.stringify(err)) 
     });
   }

   DeleteCust(cid:number):void
   {
     this.csvr.deleteCustomer(cid)
     .subscribe({
      next:result=> {
         alert("Customer Deleted!");
         this.rt.navigate(['/custs']);
      },
      error:err=>alert(JSON.stringify(err))
     });
   }

   GoBack():void
   {
    this.rt.navigate(['/custs']);
   }
}
