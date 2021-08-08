import { Directive, ElementRef, Input } from '@angular/core';
import { Especialidad } from 'src/app/02-models/especialidad';

@Directive({
  selector: '[appIconEspecialidad]'
})
export class IconEspecialidadDirective {

  @Input() appIconEspecialidad:Especialidad;
  baseSrc:string = "assets/images/";

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.src = this.setSrc(this.appIconEspecialidad.nombre);
  }

  private setSrc(name:string): string{
    switch(name){
      case "Cirujano":
        return this.baseSrc + "icon-cirujano.jpg";        
      case "Medico":
        return this.baseSrc + "icon-médico.jpg";        
      case "Neurocirujano":
        return this.baseSrc + "icon-neurocirugía.jpg";        
      case "Oftalmólogía":
        return this.baseSrc + "icon-oftalmología.jpg";        
      case "Reumatologo":
        return this.baseSrc + "icon-reumatólogo.jpg";        
      default:
        return this.baseSrc + "icon-default.png";        
    }
  }
}
