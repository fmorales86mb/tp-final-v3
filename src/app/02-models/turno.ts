import { EstadoTurno } from "./enums/turno-estado-enum";
import { Especialidad } from "./especialidad";
import { HistoriaClinica } from "./historia-clinica";
import { User } from "./user";

export interface Turno{
    paciente?:User;
    pacienteId:string;
    especialista?:User;
    especialidad:Especialidad;
    fecha:any;    
    docId?:string;
    estado:EstadoTurno;
    comentario?:string;
    resenia?:string;
    calificacion?:string;
    hasHistoria:boolean;    
}