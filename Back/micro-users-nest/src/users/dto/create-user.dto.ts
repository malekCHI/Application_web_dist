import { IsString,IsEmail,Length,MinLength, IsNotEmpty } from "class-validator";
export  class CreateUserDto {
    @IsNotEmpty()   
    @Length(3,20,{message:"incorrect lenght"}) 
    readonly username:string;
    @IsEmail({},{message:'incorrect email'})
    readonly email:string;
    @IsNotEmpty()
    @IsString ()
    @MinLength(6)
    readonly password:string;
}