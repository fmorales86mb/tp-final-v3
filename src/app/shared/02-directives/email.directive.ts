import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { User } from 'src/app/02-models/user';


@Directive({
  selector: '[appEmail]'
})
export class EmailDirective implements OnInit{

  @Input() appEmail:User;

  constructor(private el: ElementRef) { 
  }

  ngOnInit(): void {
    this.el.nativeElement.innerText = this.appEmail? this.appEmail.email: '';
  }

}
