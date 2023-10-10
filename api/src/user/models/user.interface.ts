export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  role?: UserRole;
}

export enum UserRole {
  ADMIN = 'admin',
  CHIEFEDITOR = 'chiefdditor',
  EDITOR = 'editor',
  USER = 'user',
}
