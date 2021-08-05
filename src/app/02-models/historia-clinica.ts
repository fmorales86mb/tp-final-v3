import { User } from "./user";

export interface HistoriaClinica{       
    paciente:User;
    especialista:User;
    fecha:any;   
    docId?:string;     
    alutra:number;
    peso:number;
    temperatura:number;
    presion:number;
    dinamicos:any[];    
}