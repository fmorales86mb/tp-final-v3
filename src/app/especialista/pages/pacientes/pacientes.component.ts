import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { HistorialService } from 'src/app/01-services/historial.service';
import { PdfService } from 'src/app/01-services/pdf.service';
import { HistoriaClinica } from 'src/app/02-models/historia-clinica';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  users:User[];
  usuarioSeleccionado:User;
  historial:HistoriaClinica[];
  historialSeleccionado:HistoriaClinica;

  constructor(private autService:AuthService, 
      private spinner: NgxSpinnerService,
      private historialService:HistorialService,
      private modalService: NgbModal,
      private pdfService:PdfService
      ) { 
    this.users=[];
    this.historial = [];
  }

  ngOnInit(): void {
    this.mensaje = null;
    this.spinner.show();
    this.user = this.autService.GetCurrentUser();
    
    this.historialService.getByEspecialista(this.user.docId).subscribe((items) => {
      this.users = [];

      items.forEach(i => {
        if(!this.users.some(u => u.docId == i.paciente.docId)){
          this.users.push(i.paciente);
        }        
      })

      this.spinner.hide();
    });
  }

  seleccionarUsuario(usuario:User){
    this.mensaje = null;
    this.usuarioSeleccionado = usuario;  
    
    this.historialService.getByPaciente(this.usuarioSeleccionado.docId).subscribe(items =>{
      this.historial = items;
    })
  }

  mostrarDetalle(content,historial:HistoriaClinica){
    this.historialSeleccionado = historial;
    this.modalService.open(content);
  }

  print(){
    this.pdfService.createPdfUsers(this.users, "Listado de Pacientes");
  }
}
