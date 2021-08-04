import { Rol } from "./enums/rol-enum";
import { Especialidad } from "./especialidad";

export interface User{   
    nombre:string;
    apellido:string;
    edad:number;
    dni:number;
    obraSocial?:string;
    email:string;
    perfil1Src:string;
    perfil2Src?:string;
    rol:Rol;    
    activado:boolean;
    docId?:string;
    especialidades?:Especialidad[];
    horarios?:Especialidad[];
}