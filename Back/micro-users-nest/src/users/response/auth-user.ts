import { User } from '../schemas/user.schema';

export interface AuthUser {
  user: User;
  message: string;
}
