import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { UsersRepository } from './repositories/user.repositories'
import { PrismaService } from 'src/datadase/prisma.service'
import { UsersPrismaRepository } from './repositories/prisma/user-prisma.repository'

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    },
  ],
})
export class UsersModule {}
