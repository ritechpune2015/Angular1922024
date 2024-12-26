import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductCompnoent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { DataBindComponent } from './databind/databind.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DirComponent } from './dir/dir.component';
import { ProductdetComponent } from './product/productdet.component';
import { ProductnewComponent } from './product/productnew.component';
import { CustomernewComponent } from './customer/customernew.component';

const routes: Routes = [
  {path:'',redirectTo:'wel',pathMatch:'full'},
  {path:'wel',component:WelcomeComponent,title:"Welcome !!"},
  {path:'prods',component:ProductCompnoent,title:"Product List"},
  {path:'proddet/:pid/:pname/:pr',component:ProductdetComponent},
  {path:'prodnew',component:ProductnewComponent},
  {path:'custs',component:CustomerComponent,title:"Customer List"},
  {path:'custnew',component:CustomernewComponent},
  {path:'databind',component:DataBindComponent,title:"Data Binding"},
  {path:'dire',component:DirComponent,title:"Directvie Example!"},
  {path:'**',component:NotFoundComponent,title:"Not Found"},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
