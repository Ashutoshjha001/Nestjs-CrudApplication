import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApolloError } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    try {
      const userExists = await this.userRepository.findOne({
        where: { username: createUserInput.username },
      });

      if (userExists) {
        throw new GraphQLError('User Already Exits');
      }
      return await this.userRepository.save({ ...createUserInput });
    } catch (error) {
      throw new ApolloError(error);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new ApolloError(error);
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOne(id);
      if (!user) {
        throw new GraphQLError('User is not present');
      }
      return user;
    } catch (error) {
      throw new ApolloError(error);
    }
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    try {
      await this.findOne(id);
      updateUserInput.lastUpdatedAt = new Date().toDateString();
      return await this.userRepository.save(updateUserInput);
    } catch (error) {
      throw new ApolloError(error);
    }
  }

  async remove(id: number) {
    try {
      const user = await this.userRepository.delete(id);
      if (!user) {
        throw new GraphQLError('User is not present');
      }
      return user;
    } catch (error) {
      throw new ApolloError(error);
    }
  }
}
