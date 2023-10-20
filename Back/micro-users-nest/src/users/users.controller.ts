import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { AuthUser } from './response/auth-user';
import {
  AuthGuard,
  Public,
  Roles,
  Unprotected,
} from 'nest-keycloak-connect';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  @Roles({roles: ['user'] })
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }
  @Get('/username/:username')
  async getUserByU(@Param('username') username: string): Promise<User> {
    return this.usersService.getUserByU(username);
  }
 @Get()
 @Roles({roles: ['admin'] })
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();

  }


  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(
      createUserDto.userName,
      createUserDto.firstName,
      createUserDto.lastName,
      createUserDto.email,
      createUserDto.naissance,
      createUserDto.password,
      createUserDto.passwordConfirm,
      createUserDto.verified,
      createUserDto.role,
    );
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDto);
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.deleteUser(userId);
  }

  @Post('login')
 // @UseGuards(AuthGuard)
async loginUser(@Body() loginUserDto: CreateUserDto): Promise<AuthUser> {
  const { userName, password } = loginUserDto;
  try {
    return await this.usersService.authenticateUser(userName, password);
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
  }
}

  /*@Post('login')
  async login(
    @Body() loginDto: { username: string; password: string },
  ): Promise<User> {
    const { username, password } = loginDto;
    return this.usersService.login(username, password);
  }*/
}
function ApiOkResponse(arg0: { type: any[]; }): (target: UsersController, propertyKey: "getUsers", descriptor: TypedPropertyDescriptor<() => Promise<User[]>>) => void | TypedPropertyDescriptor<() => Promise<User[]>> {
  throw new Error('Function not implemented.');
}

