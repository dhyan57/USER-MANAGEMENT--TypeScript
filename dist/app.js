"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongodb_1 = require("./config/mongodb");
const studentRepository_1 = require("./repositories/Student/studentRepository");
const StudentService_1 = require("./services/student/StudentService");
const studentController_1 = require("./controllers/student/studentController");
const student_route_1 = require("./routes/student/student.route");
const bcrypt_1 = require("./utils/bcrypt");
const adminRepositary_1 = require("./repositories/Admin/adminRepositary");
const AdminService_1 = require("./services/admin/AdminService");
const adminController_1 = require("./controllers/admin/adminController");
const admin_router_1 = require("./routes/admin/admin.router");
class ExpressApp {
    constructor() { }
    ;
    static getInstance() {
        if (!ExpressApp.instance) {
            ExpressApp.instance = (0, express_1.default)();
            ExpressApp.setMiddlewares();
            ExpressApp.setStudentRouter();
            ExpressApp.setAdminRouter();
        }
        return ExpressApp.instance;
    }
    static setMiddlewares() {
        ExpressApp.instance.use(express_1.default.json());
    }
    static injectStudent() {
        const studentRepository = new studentRepository_1.StudentRepository();
        const bcrypt = new bcrypt_1.Bcrypt();
        const injectedStudentService = new StudentService_1.StudentService(studentRepository, bcrypt);
        const injectedStudentController = new studentController_1.studentController(injectedStudentService);
        return injectedStudentController;
    }
    static injectedAdmin() {
        const adminRepository = new adminRepositary_1.AdminRepository();
        const bcrypt = new bcrypt_1.Bcrypt();
        const injectedAdminService = new AdminService_1.AdminService(adminRepository, bcrypt);
        const injectedAdminController = new adminController_1.AdminController(injectedAdminService);
        return injectedAdminController;
    }
    static setStudentRouter() {
        const injectedStudentController = this.injectStudent();
        const studentRouter = new student_route_1.StudentRouter(injectedStudentController);
        ExpressApp.instance.use('/', studentRouter.getRouter());
    }
    static setAdminRouter() {
        const injectedAdminController = this.injectedAdmin();
        const adminRouter = new admin_router_1.AdminRouter(injectedAdminController);
        ExpressApp.instance.use("/admin", adminRouter.getRouter());
    }
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // dotenv.config();
    const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "3000";
    yield mongodb_1.MongoDB.connectDB();
    const app = ExpressApp.getInstance();
    app.listen(PORT, () => {
        console.log(`Express app running on ${PORT}`);
    });
}))();
