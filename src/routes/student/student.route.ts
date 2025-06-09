import { studentController } from "../../controllers/student/studentController";
import express, { Request, Response } from 'express'

export class StudentRouter{
    private router:express.Router;

    constructor(private studentController:studentController){
        this.studentController = studentController;
        this.router = express.Router();
        this.setRouter();
    }

    private setRouter(){
        this.router.post('/signup', (req:Request, res:Response)=>{
            this.studentController.createStudent(req,res);
        })

        this.router.post("/login", (req:Request, res:Response)=>{
            this.studentController.studentLogin(req,res);
        })

        this.router.post("/update", (req:Request, res:Response)=>{
            this.studentController.updateStudent(req,res);
        })
    }

    getRouter():express.Router{
        return this.router;
    }

}