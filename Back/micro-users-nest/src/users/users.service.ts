import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';
import { UserRole } from './user-roles';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ userId });
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
    matricule: string,
    role: UserRole,
  ): Promise<User> {
    if (password === passwordConfirm) {
      return this.usersRepository.create({
        userId: uuidv4(),
        userName,
        firstName,
        lastName,
        email,
        password,
        verified,
        matricule,
        role,
        naissance,
      });
    } else {
      return null;
    }
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}
