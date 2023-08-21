import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import FeedsService from './feeds.service';
import { Injectable, UseGuards } from '@nestjs/common';
import AccessTokenGuard from '../auth/guards/accessToken.guard';
import FeedsArgs from './dto/feeds.dto';
import FeedArgs from './dto/feed.dto';
import FeedsModel from './models/feeds.model';
import Feed from './entities/feed.entity';
import FeedArgsWithID from './dto/feedWithId.dto';
import DeleteArgs from '../common/dto/delete.dto';

@Injectable()
@Resolver()
class FeedsResolver {
  constructor(
    private readonly feedsService: FeedsService,
    @InjectRepository(Feed)
    private readonly feedsRepository: Repository<Feed>,
  ) {}

  @Query(() => FeedsModel)
  @UseGuards(AccessTokenGuard)
  public async getFeeds(@Args() args: FeedsArgs) {
    return this.feedsService.getFeeds(args.page, args.pageSize, args.search);
  }

  @Mutation(() => Boolean)
  @UseGuards(AccessTokenGuard)
  public async addFeed(@Args() feed: FeedArgs) {
    await this.feedsService.addFeed(feed);
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(AccessTokenGuard)
  async deleteFeed(@Args() args: DeleteArgs) {
    await this.feedsService.deleteFeed(args.id);
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(AccessTokenGuard)
  async editFeed(@Args() feed: FeedArgsWithID) {
    await this.feedsService.editFeed(feed);
    return true;
  }
}

export default FeedsResolver;
