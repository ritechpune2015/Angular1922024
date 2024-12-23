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
}
