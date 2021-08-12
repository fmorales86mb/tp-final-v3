import { ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewContainerRef } from '@angular/core';
import { MiCaptchaComponent } from '../mi-captcha/mi-captcha.component';

@Directive({
  selector: '[appCaptcha]'
})
export class CaptchaDirective implements OnInit, OnChanges {

  private ref:ComponentRef<MiCaptchaComponent>;
  @Input() appCaptcha:boolean;
  @Output() emitter2 = new EventEmitter<any>();

  constructor(    
    private viewContainer: ViewContainerRef,
    private resolver: ComponentFactoryResolver
    ) {     
  }

  ngOnInit(): void {            
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.appCaptcha){
      this.init();
    } else if(this.ref){      
      this.ref.destroy();
    }
  }

  private init(){
    this.ref = this.viewContainer.createComponent(this.resolver.resolveComponentFactory(MiCaptchaComponent));    

    this.ref.instance.emitter.subscribe(data => {  
      console.log(data);    
      this.emitter2.emit(data);
    });
  }
  
}
