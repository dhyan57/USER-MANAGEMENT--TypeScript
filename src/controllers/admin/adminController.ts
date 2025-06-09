import { Iuser } from "../../interfaces/userInterface";
import { AdminService } from "../../services/admin/AdminService";
import  { Request, Response } from 'express'



export class AdminController {
    constructor(private adminSerivce: AdminService) {
        this.adminSerivce = adminSerivce;
    }

    async adminLogin(req:Request,res:Response):Promise<void>{
        try {
            const admin:Iuser=req.body;
            const result=await this.adminSerivce.adminLogin(admin.email,admin.password);
            res.status(200).json(result)
        } catch (error) {
            if(error instanceof Error){
            res.status(400).json({error:error.toString()})
        }
        }
    }


    async getStudentDetails(req: Request, res: Response): Promise<void> {
    try {
        const result = await this.adminSerivce.listStudents();
        res.status(200).json({students: result});
    } catch(error) {
        res.status(400).json({error})
    }
}

async updateStudent(req:Request, res:Response):Promise<void>{
        try {
            const student:Partial<Iuser> = req.body;

            if(!student._id){
                throw new Error("student id missing")
            }

            const updatedStudent = await this.adminSerivce.updateStudent(student._id, student);
            res.status(200).json({student:updatedStudent});
        } catch (error) {
            console.log("Error while updating student details");
            if(error instanceof Error){
                res.status(400).json({error})
            }
        }
    }

    async deleteStudent(req:Request, res:Response):Promise<void>{
        try {
            if(!req.body.id){
                throw new Error("Id not provided")
            }
            console.log(req.body.id);
            const deleteStudent = await this.adminSerivce.deleteStudent(req.body.id);
            res.status(200).json({student:deleteStudent})
        } catch (error) {
            console.log("Error while deleting user");
            if(error instanceof Error){
                res.status(400).json({error});
            }
        }
    }

}