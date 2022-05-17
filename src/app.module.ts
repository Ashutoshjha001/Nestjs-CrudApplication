import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './user/config/typeOrmConfig';
import { GraphQLConfig } from './user/config/graphQLConfig';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>(GraphQLConfig),
    TypeOrmModule.forRoot(TypeOrmConfig),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
