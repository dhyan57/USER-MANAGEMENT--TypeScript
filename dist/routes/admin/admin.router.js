"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = __importDefault(require("express"));
class AdminRouter {
    constructor(adminController) {
        this.adminController = adminController;
        this.adminController = adminController;
        this.router = express_1.default.Router();
        this.setRoutes();
    }
    setRoutes() {
        this.router.post("/login", (req, res) => {
            this.adminController.adminLogin(req, res);
        });
        this.router.get("/students", (req, res) => {
            this.adminController.getStudentDetails(req, res);
        });
        this.router.patch("/update", (req, res) => {
            this.adminController.updateStudent(req, res);
        });
        this.router.delete("/delete", (req, res) => {
            this.adminController.deleteStudent(req, res);
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.AdminRouter = AdminRouter;
