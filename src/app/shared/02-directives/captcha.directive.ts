import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCaptcha]'
})
export class CaptchaDirective implements OnInit {

  @Input() appCaptcha:string;

  constructor() { 
    console.log("app Captcha ok");
  }

  ngOnInit(): void {
    console.log(this.appCaptcha)
  }


}
