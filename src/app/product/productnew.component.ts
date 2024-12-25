import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductSVR } from './product.service';

@Component({
  selector: 'app-productnew',
  standalone: false,
  
  templateUrl: './productnew.component.html',
  styleUrl: './productnew.component.css',
  providers:[ProductSVR]
})
export class ProductnewComponent {
  
  //defname:string="Mobile";

  constructor(private prodsvr:ProductSVR,private rt:Router)
  {}
  SaveProduct(frm:any):void
  {
       //console.log(frm);
       this.prodsvr.createProduct(frm)
       .subscribe({
        next:result=> {
          alert("Product Saved!");
          this.rt.navigate(['/prods']);
        },
        error:err=> alert(JSON.stringify(err))
       });
  }
}
