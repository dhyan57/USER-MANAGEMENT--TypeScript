import { Iuser } from "../../interfaces/userInterface";

export interface IStudentServiceInterface{
    createStudent(student:Iuser):Promise<Iuser>;
    updateStudent(id:string,student:Partial<Iuser>):Promise<Iuser|null>;
    loginStudent(email:string, password:string):Promise<Iuser | null>
}