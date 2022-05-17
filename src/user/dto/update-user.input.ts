import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field((type) => Int, { description: 'id' })
  id: number;

  @Field(() => String, { nullable: true, description: 'username' })
  username?: string;

  @Field(() => String, { nullable: true, description: 'email' })
  email?: string;

  @Field(() => Number, { nullable: true, description: 'number' })
  number?: number;

  @Field(() => String, { nullable: true, description: 'role' })
  role?: string;

  @Field(() => String, { nullable: true, description: 'lastupdatedAt' })
  lastUpdatedAt?: string;
}
