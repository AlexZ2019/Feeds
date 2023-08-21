import { Column, Entity } from 'typeorm';
import BaseEntity from '../../common/entity/base.entity';

@Entity()
export default class Feed extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column()
  link: string;

  @Column()
  imageUrl: string;

  @Column()
  date: string;
}
