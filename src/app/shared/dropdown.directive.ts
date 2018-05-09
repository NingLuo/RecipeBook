import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  
  constructor() {
   }

  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleDropdown(){
    this.isOpen = !this.isOpen;
  };  
}
