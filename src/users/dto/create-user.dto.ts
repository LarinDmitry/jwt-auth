import {ApiProperty} from "@nestjs/swagger";
import {IsString, Length, IsEmail} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'Email'})
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: 'Must be a valid email'})
    readonly email: string;
    @ApiProperty({example: '123456', description: 'User password'})
    @IsString({message: 'Must be a string'})
    @Length(4, 16, {message: 'Not less than 4 and not more than 16'})
    readonly password: string;
}