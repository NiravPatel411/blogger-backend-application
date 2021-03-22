import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IPostComment } from 'app/shared/model/post-comment.model';

@Component({
  selector: 'jhi-post-comment-detail',
  templateUrl: './post-comment-detail.component.html',
})
export class PostCommentDetailComponent implements OnInit {
  postComment: IPostComment | null = null;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ postComment }) => (this.postComment = postComment));
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  previousState(): void {
    window.history.back();
  }
}
