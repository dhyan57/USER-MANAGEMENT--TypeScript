"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRouter = void 0;
const express_1 = __importDefault(require("express"));
class StudentRouter {
    constructor(studentController) {
        this.studentController = studentController;
        this.studentController = studentController;
        this.router = express_1.default.Router();
        this.setRouter();
    }
    setRouter() {
        this.router.post('/signup', (req, res) => {
            this.studentController.createStudent(req, res);
        });
        this.router.post("/login", (req, res) => {
            this.studentController.studentLogin(req, res);
        });
        this.router.post("/update", (req, res) => {
            this.studentController.updateStudent(req, res);
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.StudentRouter = StudentRouter;
