import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
@ArgsType()
export default class FeedArgs {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  author: string;

  @Field()
  link: string;

  @Field({ nullable: true })
  imageUrl: string;

  @Field({ nullable: true })
  date: string;
}
