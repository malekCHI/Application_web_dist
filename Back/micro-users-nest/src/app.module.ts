import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthGuard, KeycloakConnectModule, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8180/auth',
      realm: 'JobBoardKeycloack',
      clientId: 'micro-users',
      secret: '89cb9e07-9d26-4459-aef7-9c0ea648d7ef',
    }),
    MongooseModule.forRoot('mongodb://localhost/userdb'),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService,
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
    },],
})
export class AppModule {}
