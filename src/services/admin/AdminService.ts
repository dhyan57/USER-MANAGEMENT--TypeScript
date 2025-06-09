import { Iuser } from "../../interfaces/userInterface";
import { IAdminRepository } from "../../repositories/Admin/IAdminRepository";
import { IHash } from "../../utils/IHash";
import { IAdminInterface } from "./IAdminService";

export class AdminService implements IAdminInterface{
    constructor(private adminRepository:IAdminRepository, private hash:IHash){
        this.adminRepository = adminRepository;
        this.hash = this.hash;
    }

    async adminLogin(email: string, password: string): Promise<Iuser> {
        const admin=await this.adminRepository.getStudentByEmail(email);
        
        if(!admin) throw new Error("Details not found")
            if(admin.role!=="admin") throw new Error("You not a admin")

        const passwordMatch = await this.hash.comparePassword(password, admin.password);
        if (!passwordMatch) throw new Error("Invalid Password");

        return admin
    }

    async listStudents(): Promise<Iuser[]> {
        return this.adminRepository.listStudents();

    }

async deleteStudent(id: string): Promise<Iuser | null> {
        const student = await this.adminRepository.getStudentById(id);
        
        if(!student){
            throw new Error("Student dont exists")
        }

        return this.adminRepository.deleteStudent(id);
    }

  async updateStudent(id: string, student: Partial<Iuser>): Promise<Iuser | null> {
        const existing = await this.adminRepository.getStudentById(id);
        
        if(!existing){
            throw new Error("Student dont exists")
        }

        return this.adminRepository.updateStudent(id, student);

    }


}