import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  standalone: false
})
export class HighLightDirective {

  constructor(private element:ElementRef) { 
    //alert(element);
   element.nativeElement.style.backColor='red';
  }
 
  @HostListener('click') onClick()
  {
    this.element.nativeElement.style.color='red';
  }

  @HostListener('mouseenter')
  onMouseEnter()
  {
    this.element.nativeElement.style.color='green';
  }

  @HostListener('mouseout')
  onMouseOut()
  {
    this.element.nativeElement.style.color='blue';
  }
}
