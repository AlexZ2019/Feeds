import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import FeedsService from './feeds.service';
import FeedsResolver from './feeds.resolver';
import Feed from './entities/feed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feed])],
  providers: [FeedsService, FeedsResolver],
  exports: [FeedsService],
})
export default class FeedsModule {}
