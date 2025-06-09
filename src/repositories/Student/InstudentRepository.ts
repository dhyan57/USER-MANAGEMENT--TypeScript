import { Iuser } from "../../interfaces/userInterface";

export interface IstudentRepositoryInterface{
    createStudent(student:Iuser):Promise<Iuser>,
    updateStudent(id:string, student:Partial<Iuser>):Promise<Iuser | null>,
    findStudentByEmail(email:string):Promise<Iuser | null>
    findStudentById(id:string):Promise<Iuser | null>
}