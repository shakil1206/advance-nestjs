import { IsDefined, IsEmail, IsString } from "class-validator";

export class UserDTO {
    @IsDefined()
    @IsString()
    first_name: string;
    @IsDefined()
    @IsString()
    last_name: string;
    @IsDefined()
    @IsEmail()
    email: string;
    @IsDefined()
    @IsString()
    password: string;
    @IsDefined()
    @IsString()
    phone: string;
    @IsDefined()
    @IsString()
    address: string;
    @IsDefined()
    @IsString()
    description: string;
    created_at: Date;
    updated_at: Date
}