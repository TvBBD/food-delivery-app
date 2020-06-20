import { Role } from "./role";

export interface User {
    uid: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    role: Role;
}