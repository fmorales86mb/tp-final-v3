import { Especialidad } from "./especialidad";
import { LoginData } from "./loginData";
import { User } from "./user";

export interface RegisterData{
    user:User
    loginData:LoginData;
    files:File[];
    especialidades:Especialidad[];
}