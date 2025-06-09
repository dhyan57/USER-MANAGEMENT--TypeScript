import { Iuser } from "../../interfaces/userInterface";
import { userModel } from "../../models/usermodels";
import { IAdminRepository } from "./IAdminRepository";

export class AdminRepository implements IAdminRepository{
    creatAdmin(admin: Iuser): Promise<Iuser> {
        return userModel.create(admin);
    }
    getAdminDetails(): Promise<Iuser | null> {
        return userModel.findOne({role:"admin"});
    }
    getStudentByEmail(email: string): Promise<Iuser | null> {
        return userModel.findOne({email});
    }
    listStudents(): Promise<Iuser[]> {
        return userModel.find({role:"student"});
    }
    updateStudent(id: string, student: Partial<Iuser>): Promise<Iuser | null> {
        return userModel.findByIdAndUpdate(id,student,{new:true});
    }
    deleteStudent(id: string): Promise<Iuser | null> {
    return userModel.findByIdAndDelete(id);
}

    getStudentById(id: string): Promise<Iuser | null> {
        return userModel.findById(id);
    }
}