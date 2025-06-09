export  interface Iuser{
    _id?:string,
    username:string,
    password:string,
    email:string,
    role:"admin" | "student"
}