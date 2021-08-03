import { Horario } from "./horario";

export interface Especialidad{
    nombre:string;
    docId?:string;
    horarios?:Horario[];
}