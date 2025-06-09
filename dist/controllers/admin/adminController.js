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
exports.AdminController = void 0;
class AdminController {
    constructor(adminSerivce) {
        this.adminSerivce = adminSerivce;
        this.adminSerivce = adminSerivce;
    }
    adminLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = req.body;
                const result = yield this.adminSerivce.adminLogin(admin.email, admin.password);
                res.status(200).json(result);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ error: error.toString() });
                }
            }
        });
    }
    getStudentDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.adminSerivce.listStudents();
                res.status(200).json({ students: result });
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
    }
    updateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = req.body;
                if (!student._id) {
                    throw new Error("student id missing");
                }
                const updatedStudent = yield this.adminSerivce.updateStudent(student._id, student);
                res.status(200).json({ student: updatedStudent });
            }
            catch (error) {
                console.log("Error while updating student details");
                if (error instanceof Error) {
                    res.status(400).json({ error });
                }
            }
        });
    }
    deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.id) {
                    throw new Error("Id not provided");
                }
                const deleteStudent = yield this.adminSerivce.deleteStudent(req.body.id);
                res.status(200).json({ student: deleteStudent });
            }
            catch (error) {
                console.log("Error while deleting user");
                if (error instanceof Error) {
                    res.status(400).json({ error });
                }
            }
        });
    }
}
exports.AdminController = AdminController;
