
import express, { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config()
import { MongoDB } from './config/mongodb';
import { StudentRepository } from './repositories/Student/studentRepository';
import { StudentService } from './services/student/StudentService';
import { studentController } from './controllers/student/studentController';
import { StudentRouter } from './routes/student/student.route';
import { Bcrypt } from './utils/bcrypt';
import { AdminRepository } from './repositories/Admin/adminRepositary';
import { AdminService } from './services/admin/AdminService';
import { AdminController } from './controllers/admin/adminController';
import { AdminRouter } from './routes/admin/admin.router';

class ExpressApp {
    private static instance: Application;

    private constructor() { };

    public static getInstance():Application {
        if (!ExpressApp.instance) {
            ExpressApp.instance = express();
            ExpressApp.setMiddlewares();
            ExpressApp.setStudentRouter();
            ExpressApp.setAdminRouter();
        }

        return ExpressApp.instance;
    }

    private static setMiddlewares(){
        ExpressApp.instance.use(express.json())
    }

    private static injectStudent(){
        const studentRepository = new StudentRepository();
        const bcrypt = new Bcrypt()
        const injectedStudentService = new StudentService(studentRepository, bcrypt);
        const injectedStudentController = new studentController(injectedStudentService);
        return injectedStudentController;
    }

    private static injectedAdmin(){
        const adminRepository = new AdminRepository();
        const bcrypt = new Bcrypt()
        const injectedAdminService = new AdminService(adminRepository, bcrypt);
        const injectedAdminController = new AdminController(injectedAdminService);
        return injectedAdminController;
    }


    private static setStudentRouter(){
        const injectedStudentController = this.injectStudent();
        const studentRouter = new StudentRouter(injectedStudentController);
        ExpressApp.instance.use('/', studentRouter.getRouter())
    }

    private static setAdminRouter(){
        const injectedAdminController = this.injectedAdmin();
        const adminRouter = new AdminRouter(injectedAdminController);
        ExpressApp.instance.use("/admin", adminRouter.getRouter())
    }

}


(async () => {
    // dotenv.config();
    const PORT:string = process.env.PORT ?? "3000";

    await MongoDB.connectDB()
    const app = ExpressApp.getInstance();
    app.listen(PORT, ()=>{
        console.log(`Express app running on ${PORT}`)
    })
})()