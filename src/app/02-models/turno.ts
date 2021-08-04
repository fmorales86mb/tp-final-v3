import { EstadoTurno } from "./enums/turno-estado-enum";
import { Especialidad } from "./especialidad";
import { User } from "./user";

export interface Turno{
    paciente?:User;
    especialista?:User;
    especialidad:Especialidad;
    fecha:any;    
    docId?:string;
    estado:EstadoTurno;
    comentario?:string;
    resenia?:string;
}