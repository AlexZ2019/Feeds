import { Field, ObjectType } from '@nestjs/graphql';
import FeedModel from './feed.model';

@ObjectType()
class FeedsModel {
  @Field()
  total: number;

  @Field()
  pages: number;

  @Field(() => [FeedModel])
  feeds: FeedModel[];
}

export default FeedsModel;
