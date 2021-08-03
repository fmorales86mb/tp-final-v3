import { Day } from "./enums/day-enum";

export interface Horario{
    dayOfWeek:Day;
    desde:string;
    hasta:string;
}