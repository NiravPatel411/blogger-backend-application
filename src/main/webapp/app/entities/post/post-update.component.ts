import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { IPost, Post } from 'app/shared/model/post.model';
import { PostService } from './post.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { IApplicationUser } from 'app/shared/model/application-user.model';
import { ApplicationUserService } from 'app/entities/application-user/application-user.service';

type SelectableEntity = IApplicationUser | IPost;

@Component({
  selector: 'jhi-post-update',
  templateUrl: './post-update.component.html',
})
export class PostUpdateComponent implements OnInit {
  isSaving = false;
  applicationusers: IApplicationUser[] = [];
  posts: IPost[] = [];

  editForm = this.fb.group({
    id: [],
    title: [],
    metaTitle: [],
    slug: [],
    summary: [],
    publishedAt: [],
    content: [],
    authorIdId: [],
    parentIdId: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected postService: PostService,
    protected applicationUserService: ApplicationUserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ post }) => {
      if (!post.id) {
        const today = moment().startOf('day');
        post.publishedAt = today;
      }

      this.updateForm(post);

      this.applicationUserService.query().subscribe((res: HttpResponse<IApplicationUser[]>) => (this.applicationusers = res.body || []));

      this.postService.query().subscribe((res: HttpResponse<IPost[]>) => (this.posts = res.body || []));
    });
  }

  updateForm(post: IPost): void {
    this.editForm.patchValue({
      id: post.id,
      title: post.title,
      metaTitle: post.metaTitle,
      slug: post.slug,
      summary: post.summary,
      publishedAt: post.publishedAt ? post.publishedAt.format(DATE_TIME_FORMAT) : null,
      content: post.content,
      authorIdId: post.authorIdId,
      parentIdId: post.parentIdId,
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
    const post = this.createFromForm();
    if (post.id !== undefined) {
      this.subscribeToSaveResponse(this.postService.update(post));
    } else {
      this.subscribeToSaveResponse(this.postService.create(post));
    }
  }

  private createFromForm(): IPost {
    return {
      ...new Post(),
      id: this.editForm.get(['id'])!.value,
      title: this.editForm.get(['title'])!.value,
      metaTitle: this.editForm.get(['metaTitle'])!.value,
      slug: this.editForm.get(['slug'])!.value,
      summary: this.editForm.get(['summary'])!.value,
      publishedAt: this.editForm.get(['publishedAt'])!.value
        ? moment(this.editForm.get(['publishedAt'])!.value, DATE_TIME_FORMAT)
        : undefined,
      content: this.editForm.get(['content'])!.value,
      authorIdId: this.editForm.get(['authorIdId'])!.value,
      parentIdId: this.editForm.get(['parentIdId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPost>>): void {
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
