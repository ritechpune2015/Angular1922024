import { Component,OnInit,OnChanges,OnDestroy, SimpleChanges } from "@angular/core";
import { IProduct } from "./iproduct.interface";
import { ProductSVR } from "./product.service";

@Component({
    selector:'prod',
    standalone:false,
   // styles:['thead {background-color:orange;color:white;}','tbody {background-color:yellow;color:red;}'],
   //styleUrls:['product.component.css'],
    templateUrl:'product.component.html',
    providers:[ProductSVR]
})
export class ProductCompnoent implements OnInit,OnChanges,OnDestroy
{
  prods:IProduct[];  
  show:boolean=true;
  dt=new Date();
  constructor(private prodsvr:ProductSVR)
  {
    console.log("Parent Constructor Called!");
   this.prods=[];
  }

  toggleshow()
  {
    this.show=!this.show;
  }
  ngOnInit(): void {
    console.log("Parent On Init Called!");
    this.prodsvr.getProducts().subscribe(
      {
        next:response=>{
              this.prods=response;
        },
        error:err=>{
           alert(JSON.stringify(err));
        }
      }
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Parent On Changes Called!");
  }
  ngOnDestroy(): void {
    console.log("Parent On Destroy Called!");
  }
}