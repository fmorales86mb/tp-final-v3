import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mi-captcha',
  templateUrl: './mi-captcha.component.html',
  styleUrls: ['./mi-captcha.component.css'],
  //template:'<input type="text" [(ngModel)]="txtInput">  <canvas #captcha></canvas>  <button (click)="validCaptcha()">Test</button>'
})
export class MiCaptchaComponent implements OnInit, AfterViewInit {

  private code:string;
  txtInput:string;
  @ViewChild("captcha") elementView: ElementRef;
  @Output() emitter = new EventEmitter<boolean>();

  constructor() {        
    this.txtInput = '';
    this.code = '';
  }

  ngOnInit(): void {  
    this.setCaptchaCode();      
  }

  ngAfterViewInit(): void {
    this.creaIMG(this.code); 
  }

  initCaptcha(){
    this.setCaptchaCode();
    this.txtInput = '';
    this.creaIMG(this.code);
  }

  private setCaptchaCode():void {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
    this.code = code;    
  }

  public validCaptcha() {
    let result:boolean = false;

    var string1 = this.removeSpaces(this.code);
    var string2 = this.removeSpaces(this.txtInput);

    if (string1 == string2) {        
        result = true;
    }
    else {
        this.setCaptchaCode();
        this.creaIMG(this.code);
        this.txtInput = '';        
        result = false;
    }

    this.emitter.emit(result);
  }

  private removeSpaces(string) {
      return string.split(' ').join('');
  }

  private creaIMG(texto) {
    var ctxCanvas = this.elementView.nativeElement.getContext('2d');
    var fontSize = "30px";
    var fontFamily = "Arial";
    var width = 250;
    var height = 50;
    //tamaño
    ctxCanvas.canvas.width = width;
    ctxCanvas.canvas.height = height;
    //color de fondo
    ctxCanvas.fillStyle = "whitesmoke";
    ctxCanvas.fillRect(0, 0, width, height);
    //puntos de distorsion
    ctxCanvas.setLineDash([7, 10]);
    ctxCanvas.lineDashOffset = 5;
    ctxCanvas.beginPath();
    var line;
    for (var i = 0; i < (width); i++) {
        line = i * 5;
        ctxCanvas.moveTo(line, 0);
        ctxCanvas.lineTo(0, line);
    }
    ctxCanvas.stroke();
    //formato texto
    ctxCanvas.direction = 'ltr';
    ctxCanvas.font = fontSize + " " + fontFamily;
    //texto posicion
    var x = (width / 9);
    var y = (height / 3) * 2;
    //color del borde del texto
    ctxCanvas.strokeStyle = "yellow";
    ctxCanvas.strokeText(texto, x, y);
    //color del texto
    ctxCanvas.fillStyle = "red";
    ctxCanvas.fillText(texto, x, y);
  }
}
