import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { IPostComment, PostComment } from 'app/shared/model/post-comment.model';
import { PostCommentService } from './post-comment.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { IPost } from 'app/shared/model/post.model';
import { PostService } from 'app/entities/post/post.service';

type SelectableEntity = IPost | IPostComment;

@Component({
  selector: 'jhi-post-comment-update',
  templateUrl: './post-comment-update.component.html',
})
export class PostCommentUpdateComponent implements OnInit {
  isSaving = false;
  posts: IPost[] = [];
  postcomments: IPostComment[] = [];

  editForm = this.fb.group({
    id: [],
    title: [],
    content: [],
    postIdId: [],
    parentIdId: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected postCommentService: PostCommentService,
    protected postService: PostService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ postComment }) => {
      this.updateForm(postComment);

      this.postService.query().subscribe((res: HttpResponse<IPost[]>) => (this.posts = res.body || []));

      this.postCommentService.query().subscribe((res: HttpResponse<IPostComment[]>) => (this.postcomments = res.body || []));
    });
  }

  updateForm(postComment: IPostComment): void {
    this.editForm.patchValue({
      id: postComment.id,
      title: postComment.title,
      content: postComment.content,
      postIdId: postComment.postIdId,
      parentIdId: postComment.parentIdId,
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType: string, base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  setFileData(event: any, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe(null, (err: JhiFileLoadError) => {
      this.eventManager.broadcast(
        new JhiEventWithContent<AlertError>('bloggerApp.error', { ...err, key: 'error.file.' + err.key })
      );
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const postComment = this.createFromForm();
    if (postComment.id !== undefined) {
      this.subscribeToSaveResponse(this.postCommentService.update(postComment));
    } else {
      this.subscribeToSaveResponse(this.postCommentService.create(postComment));
    }
  }

  private createFromForm(): IPostComment {
    return {
      ...new PostComment(),
      id: this.editForm.get(['id'])!.value,
      title: this.editForm.get(['title'])!.value,
      content: this.editForm.get(['content'])!.value,
      postIdId: this.editForm.get(['postIdId'])!.value,
      parentIdId: this.editForm.get(['parentIdId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPostComment>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
