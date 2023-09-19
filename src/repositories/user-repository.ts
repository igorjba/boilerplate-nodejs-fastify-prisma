import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  findById(userId: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
  update(userId: string, data: Prisma.UserUpdateInput): Promise<User>
  delete(userId: string): Promise<void>
  listAll(): Promise<User[]>
}
