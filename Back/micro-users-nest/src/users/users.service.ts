import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';
import { UserRole } from './user-roles';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';
import { AuthUser } from "./response/auth-user";


@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ userId });
  }
  async getUserByU(username: string): Promise<User> {
    return this.usersRepository.findOnebyU(username);
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    naissance: Date,
    password: string,
    passwordConfirm: string,
    verified: boolean,
    role: UserRole,
  ): Promise<User> {
    const testingusername = await this.getUserByU(userName);
    const testingemail = await this.usersRepository.findOnebyEmail(email);
    if (testingusername != null) {
      throw new NotFoundException('User already exist');
    } else if (testingemail != null) {
      throw new NotFoundException('Email already used');
    } else {
      if (password === passwordConfirm) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const matricule = generateRandomMatricule();
        await sendEmail(email, matricule);
        return this.usersRepository.create({
          userId: uuidv4(),
          userName,
          firstName,
          lastName,
          email,
          password: hashedPassword,
          verified,
          matricule,
          role,
          naissance,
        });
      } else {
        throw new HttpException(
          'Passwords do not match',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }


  async authenticateUser(userName: string, password: string): Promise<AuthUser> {
    const user = await this.usersRepository.findOne({ userName });
  
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (isPasswordValid) {
        return {
          user,
          message: 'Authentication successful'
        };      
      }
    }
  
    throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }
  

  async login(username: string, password: string): Promise<User> {
    const user = await this.usersRepository.findOnebyU(username);
    if (!user) {
      throw new NotFoundException('User not exist');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return user;
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }

  async deleteUser(userId: string): Promise<User> {
    return this.usersRepository.findOneAndDelete({ userId });
  }
}
function generateRandomMatricule(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let matricule = '';

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    matricule += characters[randomIndex];
  }

  return matricule;
}
async function sendEmail(email: string, matricule: string) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'benmohamedmariam04@gmail.com',
      pass: 'bhyq vavq divf himn',
    },
  });

  let info = await transporter.sendMail({
    from: '"Mariam" benmohamedmariam04@gmail.com',
    to: email,
    subject: 'Matricule Information',
    text: `Your matricule is: ${matricule}`,
    html: `<p>Your matricule is: <strong>${matricule}</strong></p>`,
  });

  console.log('Message sent: %s', info.messageId);
}
