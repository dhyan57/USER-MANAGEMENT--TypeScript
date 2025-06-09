import { IHash } from "./IHash";
import bcrypt from 'bcrypt'

export class Bcrypt implements IHash{
    hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10)
    }

    comparePassword(pass: string, pass2: string): Promise<Boolean> {
        return bcrypt.compare(pass, pass2)
    }
}