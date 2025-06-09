import { Iuser } from "../../interfaces/userInterface";
import { IStudentServiceInterface } from "./IStudentService";
import { StudentRepository } from "../../repositories/Student/studentRepository";
import { IstudentRepositoryInterface } from "../../repositories/Student/InstudentRepository";
import { IHash } from "../../utils/IHash";


export class StudentService implements IStudentServiceInterface{

    constructor(private studentRepo:IstudentRepositoryInterface, private bcrypt:IHash){
        this.studentRepo = studentRepo;
        this.bcrypt = bcrypt;
    }
    
    async createStudent(student: Iuser): Promise<Iuser> {
        const existing = await this.studentRepo.findStudentByEmail(student.email);
        if(existing) throw new Error("student already exist")

            const hashedPassword  = await this.bcrypt.hashPassword(student.password);
        student.password = hashedPassword;
        return await this.studentRepo.createStudent(student);
        
    }

    async updateStudent(id: string, student: Partial<Iuser>): Promise<Iuser | null> {
        const studentDetails  = await this.studentRepo.findStudentById(id);

        if(!studentDetails){
            throw new Error("Email not existing");
        }

        const updatedStudent = await this.studentRepo.updateStudent(id, student);
        return updatedStudent;
    }

    async loginStudent(email: string, password: string): Promise<Iuser | null> {
        const studentDetails  = await this.studentRepo.findStudentByEmail(email);

        if(!studentDetails){
            throw new Error("Email not existing");
        }

        const passwordMatch = await this.bcrypt.comparePassword(password, studentDetails.password);
        if(!passwordMatch){
            throw new Error("Invalid Password");
        }

        return studentDetails;
    }
    
}


