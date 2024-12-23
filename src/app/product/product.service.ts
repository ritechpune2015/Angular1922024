import { HttpClient } from "@angular/common/http";
import { IProduct } from "./iproduct.interface";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductSVR
{
    apiurl:string ="https://demoapi.ritechpune.com/api/productapi";

    constructor(private http:HttpClient)
    {}

    getProducts():Observable<IProduct []>
    {
         return this.http.get<IProduct []>(this.apiurl);
    }
}