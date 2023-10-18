import {
  IsString,
  IsEmail,
  Length,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsEnum,
  Matches,
  IsDate,
} from 'class-validator';
import { UserRole } from '../user-roles';
export class UpdateUserDto {
  @IsNotEmpty()
  @Length(3, 20, { message: 'incorrect lenght' })
  userName: string;
  @Length(3, 20, { message: 'incorrect lenght' })
  firstName: string;
  @Length(3, 20, { message: 'incorrect lenght' })
  lastName: string;
  @IsEmail({}, { message: 'incorrect email' })
  email: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  passwordConfirm: string;
  @IsDate()
  naissance: Date;
  @IsEnum(UserRole)
  role: UserRole;
  @IsNotEmpty()
  verified: boolean;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  matricule: string;
}
