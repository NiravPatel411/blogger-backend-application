import { IPost } from 'app/shared/model/post.model';

export interface ICategory {
  id?: number;
  title?: string;
  metaTitle?: string;
  slug?: string;
  content?: any;
  parentIdId?: number;
  postIds?: IPost[];
}

export class Category implements ICategory {
  constructor(
    public id?: number,
    public title?: string,
    public metaTitle?: string,
    public slug?: string,
    public content?: any,
    public parentIdId?: number,
    public postIds?: IPost[]
  ) {}
}
