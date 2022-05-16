import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  number?: number;

  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  lastUpdatedAt?: string;
}
