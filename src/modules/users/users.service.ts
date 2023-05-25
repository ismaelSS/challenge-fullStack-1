import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersRepository } from './repositories/user.repositories'

@Injectable()
export class UsersService {
  constructor(private UsersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    const findUser = await this.UsersRepository.findByEmail(createUserDto.email)
    if (findUser) {
      throw new ConflictException('User already exists')
    }

    const user = await this.UsersRepository.create(createUserDto)

    return user
  }

  async findAll() {
    const users = await this.UsersRepository.findAll()
    return users
  }

  async findOne(id: string) {
    const user = await this.UsersRepository.findOne(id)
    if (!user) {
      throw new NotFoundException('User not found.')
    }
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.UsersRepository.findOne(id)
    if (!user) {
      throw new NotFoundException('User not found.')
    }

    const updateUser = await this.UsersRepository.update(id, updateUserDto)
    return updateUser
  }

  async remove(id: string) {
    const user = await this.UsersRepository.findOne(id)
    if (!user) {
      throw new NotFoundException('User not found.')
    }

    await this.UsersRepository.delete(id)
    return
  }
}
