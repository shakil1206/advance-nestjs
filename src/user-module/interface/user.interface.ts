import { Document } from "mongoose";

export interface User extends Document {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    description: string;
    created_at: Date;
}