import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'Email'})
    readonly email: string;
    @ApiProperty({example: '123456', description: 'User password'})
    readonly password: string;
}