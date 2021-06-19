import { TipoMje } from "./enums/mje-enum";

export interface Mensaje{
    txt:string;
    tipo?:TipoMje;
}