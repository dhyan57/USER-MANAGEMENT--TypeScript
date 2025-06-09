import { Iuser } from "../../interfaces/userInterface";
import { userModel } from "../../models/usermodels";
import { IstudentRepositoryInterface } from "./InstudentRepository";

export class StudentRepository implements IstudentRepositoryInterface{
    async createStudent(student: Iuser): Promise<Iuser> {
        return userModel.create(student);
    }
    async updateStudent(id: string, student: Partial<Iuser>): Promise<Iuser | null> {
        return userModel.findByIdAndUpdate(id,student,{new:true});
    }
    async findStudentByEmail(email: string): Promise<Iuser | null> {
        return userModel.findOne({email});
    }
    async findStudentById(id: string): Promise<Iuser | null> {
        return userModel.findById(id);
    }
    
}