import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import Feed from './entities/feed.entity';
import FeedArgsWithID from './dto/feedWithId.dto';

@Injectable()
class FeedsService {
  constructor(
    @InjectRepository(Feed)
    private readonly feedsRepository: Repository<Feed>,
  ) {}
  public async getFeeds(page = 1, pageSize = 10, search = '') {
    const pageSizeNumber = Number(pageSize);
    const lastItemCount = Number(page) * pageSizeNumber;
    const skip = lastItemCount - pageSizeNumber;
    const [result, total] = await this.feedsRepository.findAndCount({
      where: [{ title: Like(`%${search}%`) }, { author: Like(`%${search}%`) }],
      skip,
      take: pageSize,
    });

    return {
      feeds: result,
      total,
      pages: Math.ceil(total / pageSize),
    };
  }

  public async addFeed(feed) {
    await this.feedsRepository.insert(feed);
  }

  public async editFeed(feed: FeedArgsWithID) {
    await this.feedsRepository.update({ id: feed.id }, feed);
  }

  async deleteFeed(id: number) {
    await this.feedsRepository.delete({ id });
  }
}

export default FeedsService;
