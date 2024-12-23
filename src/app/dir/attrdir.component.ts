import { Component } from "@angular/core";

@Component({
    selector:'attrdir',
    standalone:false,
    templateUrl:'attrdir.component.html',
    styles:['.box {width:100px;height:100px;background-color:orange}']
})
export class AttrDirComponent
{
  flag:boolean=false;
    toggle():void{
        this.flag=!this.flag;
       }
   
}