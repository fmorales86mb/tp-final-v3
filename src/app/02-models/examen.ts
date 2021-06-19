import { Materia } from "./materia";
import { User } from "./user";

export interface Examen{    
    fecha:any,
    materia:Materia,    
    docente:User
}