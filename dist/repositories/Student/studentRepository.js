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
exports.StudentRepository = void 0;
const usermodels_1 = require("../../models/usermodels");
class StudentRepository {
    createStudent(student) {
        return __awaiter(this, void 0, void 0, function* () {
            return usermodels_1.userModel.create(student);
        });
    }
    updateStudent(id, student) {
        return __awaiter(this, void 0, void 0, function* () {
            return usermodels_1.userModel.findByIdAndUpdate(id, student, { new: true });
        });
    }
    findStudentByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return usermodels_1.userModel.findOne({ email });
        });
    }
    findStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return usermodels_1.userModel.findById(id);
        });
    }
}
exports.StudentRepository = StudentRepository;
