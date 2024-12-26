import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductCompnoent } from './product/product.component';
import { DataBindComponent } from './databind/databind.component';
import { DirComponent } from './dir/dir.component';
import { AttrDirComponent } from './dir/attrdir.component';
import { StarComponent } from './star/star.component';
import { CustomerComponent } from './customer/customer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductdetComponent } from './product/productdet.component';
import { CustcategoryPipe } from './customer/custcategory.pipe';
import { ProductnewComponent } from './product/productnew.component';
import { CustomernewComponent } from './customer/customernew.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductCompnoent,
    DataBindComponent,
    DirComponent,
    AttrDirComponent,
    StarComponent,
    CustomerComponent,
    NotFoundComponent,
    ProductdetComponent,
    CustcategoryPipe,
    ProductnewComponent,
    CustomernewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
