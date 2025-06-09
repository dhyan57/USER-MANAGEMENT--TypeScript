import { AdminController } from "../../controllers/admin/adminController";
import express, { Request, Response } from 'express'
export class AdminRouter{
    private router :express.Router;

    constructor(private adminController:AdminController){
        this.adminController = adminController;
        this.router = express.Router()
        this.setRoutes()
    }

    private setRoutes(){
        this.router.post("/login", (req:Request, res:Response)=>{
            this.adminController.adminLogin(req, res);
        })

        this.router.get("/students", (req:Request, res:Response)=>{
            this.adminController.getStudentDetails(req,res);
        })

        this.router.patch("/update", (req:Request, res:Response)=>{
            this.adminController.updateStudent(req,res);
        })

        this.router.delete("/delete", (req:Request, res:Response)=>{
            this.adminController.deleteStudent(req, res);
        })
    }

    public getRouter():express.Router{
        return this.router;
    }
}