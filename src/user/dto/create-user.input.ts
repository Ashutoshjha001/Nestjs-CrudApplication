import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'username' })
  username: string;

  @Field(() => String, { description: 'email' })
  email: string;

  @Field(() => Number, { description: 'number' })
  number: number;

  @Field(() => String, { description: 'role' })
  role: string;

  @Field(() => String, { description: 'createdAt' })
  createdAt: string;

  @Field(() => String, { nullable: true, description: 'lastUpdatedAt' })
  lastUpdatedAt?: string;
}
