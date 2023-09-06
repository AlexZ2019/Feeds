import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import FeedsService from './feeds.service';
import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';
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
    try {
      return this.feedsService.getFeeds(args.page, args.pageSize, args.search);
    } catch (err) {
      throw new BadRequestException('Error getting feeds');
    }
  }

  @Mutation(() => Boolean)
  @UseGuards(AccessTokenGuard)
  public async addFeed(@Args() feed: FeedArgs) {
    try {
      await this.feedsService.addFeed(feed);
      return true;
    } catch ({ message }) {
      throw new BadRequestException(message);
    }
  }

  @Mutation(() => Boolean)
  @UseGuards(AccessTokenGuard)
  async deleteFeed(@Args() args: DeleteArgs) {
    try {
      await this.feedsService.deleteFeed(args.id);
      return true;
    } catch ({ message }) {
      throw new BadRequestException(message);
    }
  }

  @Mutation(() => Boolean)
  @UseGuards(AccessTokenGuard)
  async editFeed(@Args() feed: FeedArgsWithID) {
    try {
      await this.feedsService.editFeed(feed);
      return true;
    } catch ({ message }) {
      throw new BadRequestException(message);
    }
  }
}

export default FeedsResolver;
