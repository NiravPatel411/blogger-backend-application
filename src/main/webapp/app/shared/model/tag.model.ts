import { IPost } from 'app/shared/model/post.model';

export interface ITag {
  id?: number;
  title?: string;
  metaTitle?: string;
  slug?: string;
  content?: any;
  postId?: number;
  postIds?: IPost[];
}

export class Tag implements ITag {
  constructor(
    public id?: number,
    public title?: string,
    public metaTitle?: string,
    public slug?: string,
    public content?: any,
    public postId?: number,
    public postIds?: IPost[]
  ) {}
}
