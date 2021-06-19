import { User } from "./user";

export interface Materia {
    id?:string;
    name:string;
    cuatrimestre:number;
    cupo:number;
    year:number;
    docente:User;
    imgSrc:string;
    //estudiantes:User[];
}