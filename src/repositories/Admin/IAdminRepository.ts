import { Iuser } from "../../interfaces/userInterface";

export interface IAdminRepository{
    creatAdmin(admin:Iuser):Promise<Iuser>;
    getAdminDetails():Promise<Iuser|null>;
    listStudents():Promise<Iuser[]>;
    deleteStudent(id:string):Promise<Iuser | null>
    updateStudent(id:string,student:Partial<Iuser>):Promise<Iuser|null>;
    getStudentByEmail(email:string):Promise<Iuser | null>
    getStudentById(id:string):Promise<Iuser | null>
}
