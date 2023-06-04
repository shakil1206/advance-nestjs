import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsInt, IsOptional, IsArray, ArrayMinSize, ValidateNested, IsUUID } from "class-validator"

export class Address {
    @ApiProperty({ 'description': "", required: true })
    @IsString()
    readonly city: string;
}
export class CatDto {
    @ApiProperty({ description: "", required: true })
    // @IsUUID()
    @IsString()
    readonly id: string

    @ApiProperty({ description: "", required: true })
    @IsString()
    name: string;

    @ApiProperty({ description: "", required: true })
    @IsInt()
    age: number;

    @ApiProperty({ description: "", required: true })
    @IsString()
    breed: string;

    @ApiProperty({ description: "address", required: true })
    @IsOptional()
    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested()
    @Type(() => Address)
    address?: Address[];
}




export class GetCatByIdParamDto {
    @ApiProperty({ description: "", required: true })
    // @IsUUID()
    @IsString()
    readonly id: string
}