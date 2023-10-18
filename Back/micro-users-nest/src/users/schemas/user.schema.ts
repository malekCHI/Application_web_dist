import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRole } from '../user-roles';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  userName: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  naissance: Date;

  @Prop()
  verified: boolean;

  @Prop()
  matricule: string;

  @Prop()
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
