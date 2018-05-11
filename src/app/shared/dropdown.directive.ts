<<<<<<< HEAD
import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';
=======
import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';
>>>>>>> 6564b34d48e24f0c8246377bc0b11b9f643e7741

@Directive({
  selector: '[appDropdown]'
})
<<<<<<< HEAD
export class DropdownDirective implements OnInit {

  constructor() { }

  ngOnInit(){

  }
=======
export class DropdownDirective {
  
  constructor() {
   }
>>>>>>> 6564b34d48e24f0c8246377bc0b11b9f643e7741

  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleDropdown(){
    this.isOpen = !this.isOpen;
<<<<<<< HEAD
  }
=======
  };  
>>>>>>> 6564b34d48e24f0c8246377bc0b11b9f643e7741
}
