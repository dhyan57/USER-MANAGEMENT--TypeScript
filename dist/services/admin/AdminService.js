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
exports.AdminService = void 0;
class AdminService {
    constructor(adminRepository, hash) {
        this.adminRepository = adminRepository;
        this.hash = hash;
        this.adminRepository = adminRepository;
        this.hash = this.hash;
    }
    adminLogin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield this.adminRepository.getStudentByEmail(email);
            if (!admin)
                throw new Error("Details not found");
            if (admin.role !== "admin")
                throw new Error("You not a admin");
            const passwordMatch = yield this.hash.comparePassword(password, admin.password);
            if (!passwordMatch)
                throw new Error("Invalid Password");
            return admin;
        });
    }
    listStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.adminRepository.listStudents();
        });
    }
    deleteStudent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield this.adminRepository.getStudentById(id);
            if (!student) {
                throw new Error("Student dont exists");
            }
            return this.adminRepository.deleteStudent(id);
        });
    }
    updateStudent(id, student) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = yield this.adminRepository.getStudentById(id);
            if (!existing) {
                throw new Error("Student dont exists");
            }
            return this.adminRepository.updateStudent(id, student);
        });
    }
}
exports.AdminService = AdminService;
