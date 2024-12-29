import { Component,Input,OnInit,OnChanges,OnDestroy, SimpleChanges, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'star',
    templateUrl:'star.component.html',
    standalone:false,
    styles:['div {background-color:yellow;color:red;padding:2px;}']
})
export class StarComponent implements OnInit,OnChanges,OnDestroy
{
    @Input()
    noofstars:number=3;
    @Output()
    qualityevent=new EventEmitter<string>();

    SendQuality():void
    {
      let q:string="";
      if(this.noofstars>=5)
      {
        q="Best Quality Material!";
      }
      else if(this.noofstars>=3)
      {
        q="Good Quality Material";
      }
      else
      {
         q="Accepted Quality Material!";
      }
      this.qualityevent.emit(q);
    }
    constructor()
    {
      console.log("Child Constructor Called!");

    }
    ngOnInit(): void {
      console.log("Child On Init Called!");  
    }
    ngOnDestroy(): void {
        console.log("Child On Destroy Called!");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("Child On Changes!");
    }

}