import { ArgsType, Field, InputType } from '@nestjs/graphql';
import FeedArgs from './feed.dto';

@InputType()
@ArgsType()
export default class FeedArgsWithID extends FeedArgs {
  @Field()
  id: number;
}
