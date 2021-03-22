import { Moment } from 'moment';
import { ITag } from 'app/shared/model/tag.model';
import { ICategory } from 'app/shared/model/category.model';

export interface IPost {
  id?: number;
  title?: string;
  metaTitle?: string;
  slug?: string;
  summary?: any;
  publishedAt?: Moment;
  content?: any;
  authorIdId?: number;
  parentIdId?: number;
  tagIds?: ITag[];
  categoryIds?: ICategory[];
}

export class Post implements IPost {
  constructor(
    public id?: number,
    public title?: string,
    public metaTitle?: string,
    public slug?: string,
    public summary?: any,
    public publishedAt?: Moment,
    public content?: any,
    public authorIdId?: number,
    public parentIdId?: number,
    public tagIds?: ITag[],
    public categoryIds?: ICategory[]
  ) {}
}
