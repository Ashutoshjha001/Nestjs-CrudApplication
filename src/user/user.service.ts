import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.userRepository.create(createUserInput);

    return this.userRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneOrFail(id);
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    const findUserById = await this.findOne(id);

    findUserById.email =
      updateUserInput.email !== null
        ? updateUserInput.email
        : findUserById.email;
    findUserById.number =
      updateUserInput.number !== null
        ? updateUserInput.number
        : findUserById.number;
    findUserById.lastUpdatedAt = new Date().toDateString();
    findUserById.role =
      updateUserInput.role !== null ? updateUserInput.role : findUserById.role;
    findUserById.username =
      updateUserInput.username !== null
        ? updateUserInput.username
        : findUserById.username;

    updateUserInput.lastUpdatedAt = new Date().toDateString();

    return this.userRepository.save(updateUserInput);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
