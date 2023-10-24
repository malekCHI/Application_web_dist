import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { UserSchema } from './users/schemas/user.schema';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://127.0.0.1:8180/auth',
      realm: 'JobBoardKeycloack',
      clientId: 'user_ms',
      secret: '79eef0eb-2ab8-47f9-9bb3-f74b8010847d',
    }),
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/userdb?directConnection=true',
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },

    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
