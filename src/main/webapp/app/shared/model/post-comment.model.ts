export interface IPostComment {
  id?: number;
  title?: string;
  content?: any;
  postIdId?: number;
  parentIdId?: number;
}

export class PostComment implements IPostComment {
  constructor(public id?: number, public title?: string, public content?: any, public postIdId?: number, public parentIdId?: number) {}
}
