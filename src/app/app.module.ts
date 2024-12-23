import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
