import { Request, Response } from "express";
import { IStudentServiceInterface } from "../../services/student/IStudentService";
import { Iuser } from "../../interfaces/userInterface";

export class studentController {
    constructor(private studentSerivce: IStudentServiceInterface) {
        this.studentSerivce = studentSerivce;
    }

    async createStudent(req: Request, res: Response): Promise<void> {
        try {
            const student: Iuser = req.body;
            await this.studentSerivce.createStudent(student);
            res.status(201).json({ message: "student created successfully" });
        } catch (err) {
            console.log("Error", err);
            if (err instanceof Error) {
                res.status(500).json({error:"Error while creating user"});
            }
        }
    }

    async studentLogin(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const student =await this.studentSerivce.loginStudent(email, password);
            if (!student) {
                throw new Error("Invalid Credentials")
            }

            res.status(200).json(student)

        } catch(err) {
            console.log("Error while login", err);
            res.status(400).json({error:err});
        }
    }

    async updateStudent(req:Request, res:Response){
        try {
            const student = req.body;
            const updatedStudent = await this.studentSerivce.updateStudent(student._id, student);
            if(!updatedStudent){
                throw new Error("Error while updating Student");
            }

            res.status(204).json(updatedStudent)
        } catch (error) {
            console.log("Error while updating student", error);
            if(error instanceof Error){
                res.status(400).json({error:error});
            }
        }
    }
}