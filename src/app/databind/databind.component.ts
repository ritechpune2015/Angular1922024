import { Component } from "@angular/core";

@Component({
    selector:'data',
    standalone:false,
    templateUrl:'databind.component.html',
    styleUrls:['databind.component.css']
})
export class DataBindComponent
{
    title:string ="Options to Bind Data in Angular"
    qty:number=50;
    price:number=100;

    SayHello():string
    {
        return "Say Hello Called!";
    }

    ClickFunc():void
    {
        alert("Button Click Called!");
    }
    
    Handle():void
    {
        alert("Mouse Inside Div!!!!!!!!!!");
    }

    ShowVal(obj:HTMLInputElement):void
    {
        alert(obj.value);
        console.log(obj.size);
    }
}