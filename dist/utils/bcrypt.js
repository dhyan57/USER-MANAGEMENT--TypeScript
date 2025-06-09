"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bcrypt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class Bcrypt {
    hashPassword(password) {
        return bcrypt_1.default.hash(password, 10);
    }
    comparePassword(pass, pass2) {
        return bcrypt_1.default.compare(pass, pass2);
    }
}
exports.Bcrypt = Bcrypt;
