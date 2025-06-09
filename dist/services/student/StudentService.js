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
exports.StudentService = void 0;
class StudentService {
    constructor(studentRepo, bcrypt) {
        this.studentRepo = studentRepo;
        this.bcrypt = bcrypt;
        this.studentRepo = studentRepo;
        this.bcrypt = bcrypt;
    }
    createStudent(student) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = yield this.studentRepo.findStudentByEmail(student.email);
            if (existing)
                throw new Error("student already exist");
            const hashedPassword = yield this.bcrypt.hashPassword(student.password);
            student.password = hashedPassword;
            return yield this.studentRepo.createStudent(student);
        });
    }
    updateStudent(id, student) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentDetails = yield this.studentRepo.findStudentById(id);
            if (!studentDetails) {
                throw new Error("Email not existing");
            }
            const updatedStudent = yield this.studentRepo.updateStudent(id, student);
            return updatedStudent;
        });
    }
    loginStudent(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentDetails = yield this.studentRepo.findStudentByEmail(email);
            if (!studentDetails) {
                throw new Error("Email not existing");
            }
            const passwordMatch = yield this.bcrypt.comparePassword(password, studentDetails.password);
            if (!passwordMatch) {
                throw new Error("Invalid Password");
            }
            return studentDetails;
        });
    }
}
exports.StudentService = StudentService;
