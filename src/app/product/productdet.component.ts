import { Component, numberAttribute, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdet',
  standalone: false,
  
  templateUrl: './productdet.component.html',
  styleUrl: './productdet.component.css'
})
export class ProductdetComponent implements OnInit {

  productid:number;
  productname:string;
  price:number;
  constructor(private art:ActivatedRoute) {
    this.productid=0;
    this.productname="";
    this.price=0;
  }
  ngOnInit(): void {
   /* this.art.paramMap.subscribe(
      {
        next:data=>{
          this.productid = Number(data.get('pid'));
          this.productname=String(data.get("pname"));
          this.price=Number(data.get('pr'));
        }
      }
    ); */
    this.productid=Number(this.art.snapshot.paramMap.get('pid'));
    this.productname=String(this.art.snapshot.paramMap.get("pname"));
    this.price = Number(this.art.snapshot.paramMap.get('pr'));
  }
}
