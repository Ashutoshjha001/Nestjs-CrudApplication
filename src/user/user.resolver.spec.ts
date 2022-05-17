import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        {
          provide: UserService,
          useFactory: () => ({
            create: jest.fn((user: CreateUserInput) => ({
              id: 1,
              ...user,
            })),
            findAll: jest.fn(() => [
              {
                id: 1,
                username: 'Manju m',
                role: 'admin',
                number: 8123738957,
                createdAt: '17/05/22',
                email: 'manjuhinkal00@gmail.com',
              },
              {
                id: 2,
                username: 'Ashutosh Jha',
                role: 'admin',
                number: 8123738957,
                createdAt: '17/05/22',
                email: 'manjuhinkal00@gmail.com',
              },
            ]),
            findOne: jest.fn((id: number) => ({
              id: id,
              username: 'Manju m',
              role: 'admin',
              number: 8123738957,
              createdAt: '17/05/22',
              email: 'manjuhinkal00@gmail.com',
            })),
            update: jest.fn((id: number, updateUser: UpdateUserInput) => ({
              id: id,
              username: updateUser.username,
              role: updateUser.role,
              number: updateUser.number,
              createdAt: '17/05/22',
              email: updateUser.email,
              lastUpdatedAt: updateUser.lastUpdatedAt,
            })),
            remove: jest.fn((id: number) => ({
              id: id,
              username: 'Manju m',
              role: 'admin',
              number: 8123738957,
              createdAt: '17/05/22',
              email: 'manjuhinkal00@gmail.com',
            })),
          }),
        },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createUser', () => {
    it('should make a new user', () => {
      expect(
        resolver.createUser({
          username: 'Manju m',
          role: 'admin',
          number: 8123738957,
          createdAt: '17/05/22',
          email: 'manjuhinkal00@gmail.com',
        }),
      ).resolves.toEqual({
        id: 1,
        username: 'Manju m',
        role: 'admin',
        number: 8123738957,
        createdAt: '17/05/22',
        email: 'manjuhinkal00@gmail.com',
      });
    });
  });

  describe('getAllUsers', () => {
    it('should get all users', () => {
      expect(resolver.getAllUsers()).resolves.toEqual([
        {
          id: 1,
          username: 'Manju m',
          role: 'admin',
          number: 8123738957,
          createdAt: '17/05/22',
          email: 'manjuhinkal00@gmail.com',
        },
        {
          id: 2,
          username: 'Ashutosh Jha',
          role: 'admin',
          number: 8123738957,
          createdAt: '17/05/22',
          email: 'manjuhinkal00@gmail.com',
        },
      ]);
    });
  });
  describe('getUserById', () => {
    it('should get user by id', () => {
      expect(resolver.getUserById(1)).resolves.toEqual({
        id: 1,
        username: 'Manju m',
        role: 'admin',
        number: 8123738957,
        createdAt: '17/05/22',
        email: 'manjuhinkal00@gmail.com',
      });
    });
  });
  describe('updateUser', () => {
    it('should update the user', () => {
      expect(
        resolver.updateUser({
          id: 1,
          username: 'Manju m',
          role: 'admin',
          number: 8123738957,
          email: 'manjuhinkal00@gmail.com',
          lastUpdatedAt: new Date().toString(),
        }),
      ).resolves.toEqual({
        id: 1,
        username: 'Manju m',
        role: 'admin',
        number: 8123738957,
        createdAt: '17/05/22',
        email: 'manjuhinkal00@gmail.com',
        lastUpdatedAt: new Date().toString(),
      });
    });
  });

  describe('removeUser', () => {
    it('should remove user', () => {
      expect(resolver.removeUser(1)).resolves.toEqual({
        id: 1,
        username: 'Manju m',
        role: 'admin',
        number: 8123738957,
        createdAt: '17/05/22',
        email: 'manjuhinkal00@gmail.com',
      });
    });
  });
});
