import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {

  constructor() { }

  ngOnInit(){}

  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleDropdown(){
    this.isOpen = !this.isOpen;
  }
}
