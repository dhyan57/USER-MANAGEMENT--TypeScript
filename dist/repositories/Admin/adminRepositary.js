"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const usermodels_1 = require("../../models/usermodels");
class AdminRepository {
    creatAdmin(admin) {
        return usermodels_1.userModel.create(admin);
    }
    getAdminDetails() {
        return usermodels_1.userModel.findOne({ role: "admin" });
    }
    getStudentByEmail(email) {
        return usermodels_1.userModel.findOne({ email });
    }
    listStudents() {
        return usermodels_1.userModel.find({ role: "student" });
    }
    updateStudent(id, student) {
        return usermodels_1.userModel.findByIdAndUpdate(id, student, { new: true });
    }
    deleteStudent(id) {
        return usermodels_1.userModel.findByIdAndDelete(id);
    }
    getStudentById(id) {
        return usermodels_1.userModel.findById(id);
    }
}
exports.AdminRepository = AdminRepository;
