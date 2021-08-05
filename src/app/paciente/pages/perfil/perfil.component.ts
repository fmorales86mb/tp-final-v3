import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { HistorialService } from 'src/app/01-services/historial.service';
import { HistoriaClinica } from 'src/app/02-models/historia-clinica';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  historiales:HistoriaClinica[];
  historialSeleccionado:HistoriaClinica;
  @ViewChild("#staticBackdrop2") modal: ElementRef;
  
  constructor(
    private autService:AuthService,
    private historialService:HistorialService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
  ) {
    this.historiales = [];
  }

  ngOnInit(): void {
    this.mensaje = null;
    this.user = this.autService.GetCurrentUser();

    this.spinner.show();
    this.historialService.getByPaciente(this.user.docId).subscribe(items =>{
      this.historiales = items;
      this.spinner.hide();
    })
  }

  mostrarDetalle(content,historial:HistoriaClinica){
    this.historialSeleccionado = historial;
    // console.log(this.historialSeleccionado);
    this.modalService.open(content);
  }
}
