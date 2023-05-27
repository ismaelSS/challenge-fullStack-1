import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { UsersRepository } from './repositories/user.repositories'
import { UserInMemoryRepository } from './repositories/in-memory/user.in-memory.repository'
import { PrismaService } from 'src/datadase/prisma.service'

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UserInMemoryRepository,
    },
  ],
})
export class UsersModule {}
