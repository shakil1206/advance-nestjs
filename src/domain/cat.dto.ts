import { IsString, IsDefined } from "class-validator"

export class CatDto {
    @IsString()
    @IsDefined()
    name: string;
    @IsString()
    @IsDefined()
    age: number;
    @IsString()
    @IsDefined()
    breed: string;
}