export interface IHash{
    hashPassword(password:string):Promise<string>,
    comparePassword(pass:string, pass2:string):Promise<Boolean>
}