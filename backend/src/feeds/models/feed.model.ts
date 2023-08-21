import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class FeedModel {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  imageUrl: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  link: string;

  @Field({ nullable: true })
  author: string;

  @Field({ nullable: true })
  date: Date;
}


export default FeedModel;
