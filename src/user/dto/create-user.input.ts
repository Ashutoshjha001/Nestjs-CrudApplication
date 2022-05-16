import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  number: number;

  @Field()
  role: string;

  @Field()
  createdAt: string;

  @Field({ nullable: true })
  lastUpdatedAt?: string;
}
