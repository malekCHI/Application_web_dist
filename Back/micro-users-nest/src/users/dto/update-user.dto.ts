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
  @IsDate()
  naissance: Date;
}
