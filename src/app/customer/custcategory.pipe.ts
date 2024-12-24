import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custcategory',
  standalone: false
})
export class CustcategoryPipe implements PipeTransform {

  transform(value:number):string {
    let cat:string="Not Defined";
     if(value>=15000)
     {
      cat ="Premium";
     }
     else if (value >=10000)
       {
        cat ="Valuable";
       }
       else
       {
        cat ="Regular";
       }
    return cat;
  }

}
