import { Component } from "@angular/core";

@Component({
    selector:'dir',
    templateUrl:'dir.component.html',
    standalone:false,
    styles:['.box {width:100px;height:100px;background-color:red;}']
})
export class DirComponent
{
    flag:boolean=true;
    val:number=3;
    names:string []=["Vue","Next","Backbone","React","Node","Blazor"];
    toggle():void{
     this.flag=!this.flag;
    }

}