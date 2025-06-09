import { Iuser } from "../../interfaces/userInterface";


export interface IAdminInterface{
    adminLogin(email:string,password:string):Promise<Iuser>;
    listStudents():Promise<Iuser[]>;
    deleteStudent(id:string):Promise<Iuser|null>;
    updateStudent(id:string,student:Partial<Iuser>):Promise<Iuser|null>;
}

