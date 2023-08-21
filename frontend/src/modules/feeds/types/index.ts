import dayjs from 'dayjs';

export interface IFeed {
  id: number;
  title: string;
  description?: string;
  author?: string;
  imageUrl?: string;
  link: string;
  date?: string;
  onClick: (value: string) => void
}

export type FormData = {
  title?: string;
  description?: string;
  author?: string;
  link?: string;
  imageUrl?: string;
  date?: string;
}
