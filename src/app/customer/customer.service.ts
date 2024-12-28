import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from './icustomer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiurl:string="https://demoapi.ritechpune.com/api/customerapi";
  constructor(private httpclient:HttpClient) { 
  }

  getAllCustomers():Observable<ICustomer []>
  {
     return this.httpclient.get<ICustomer []>(this.apiurl); 
  }

  getByCustomerID(id:number):Observable<ICustomer>
  {
    //var str=this.apiurl+"/"+id;
   // alert(id);
    var str =`${this.apiurl}\\${id}`;
    return this.httpclient.get<ICustomer>(str);
  }

  createCustomer(rec:ICustomer):Observable<any>
  {
   return this.httpclient.post(this.apiurl,rec,{responseType:'text'});
  }

  editCustomer(rec:ICustomer):Observable<any>
  {
   return this.httpclient.put(this.apiurl,rec,{responseType:'text'});
  }

  deleteCustomer(cid:number):Observable<any>
  {
    return this.httpclient.delete(this.apiurl+"/"+ cid,{responseType:'text'});
  }
}
