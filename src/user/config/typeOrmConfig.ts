import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../user.entity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:',
  entities: [User],
  synchronize: true,
};
