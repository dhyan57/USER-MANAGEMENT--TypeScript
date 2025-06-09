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
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
class studentController {
    constructor(studentSerivce) {
        this.studentSerivce = studentSerivce;
        this.studentSerivce = studentSerivce;
    }
    createStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = req.body;
                yield this.studentSerivce.createStudent(student);
                res.status(201).json({ message: "student created successfully" });
            }
            catch (err) {
                console.log("Error", err);
                if (err instanceof Error) {
                    res.status(500).json({ error: "Error while creating user" });
                }
            }
        });
    }
    studentLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const student = yield this.studentSerivce.loginStudent(email, password);
                if (!student) {
                    throw new Error("Invalid Credentials");
                }
                res.status(200).json(student);
            }
            catch (err) {
                console.log("Error while login", err);
                res.status(400).json({ error: err });
            }
        });
    }
    updateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = req.body;
                const updatedStudent = yield this.studentSerivce.updateStudent(student._id, student);
                if (!updatedStudent) {
                    throw new Error("Error while updating Student");
                }
                res.status(204).json(updatedStudent);
            }
            catch (error) {
                console.log("Error while updating student", error);
                if (error instanceof Error) {
                    res.status(400).json({ error: error });
                }
            }
        });
    }
}
exports.studentController = studentController;
