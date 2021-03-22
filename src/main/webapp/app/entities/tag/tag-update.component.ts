import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { ITag, Tag } from 'app/shared/model/tag.model';
import { TagService } from './tag.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { IPost } from 'app/shared/model/post.model';
import { PostService } from 'app/entities/post/post.service';

@Component({
  selector: 'jhi-tag-update',
  templateUrl: './tag-update.component.html',
})
export class TagUpdateComponent implements OnInit {
  isSaving = false;
  posts: IPost[] = [];

  editForm = this.fb.group({
    id: [],
    title: [],
    metaTitle: [],
    slug: [],
    content: [],
    postId: [],
    postIds: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected tagService: TagService,
    protected postService: PostService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ tag }) => {
      this.updateForm(tag);

      this.postService.query().subscribe((res: HttpResponse<IPost[]>) => (this.posts = res.body || []));
    });
  }

  updateForm(tag: ITag): void {
    this.editForm.patchValue({
      id: tag.id,
      title: tag.title,
      metaTitle: tag.metaTitle,
      slug: tag.slug,
      content: tag.content,
      postId: tag.postId,
      postIds: tag.postIds,
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
    const tag = this.createFromForm();
    if (tag.id !== undefined) {
      this.subscribeToSaveResponse(this.tagService.update(tag));
    } else {
      this.subscribeToSaveResponse(this.tagService.create(tag));
    }
  }

  private createFromForm(): ITag {
    return {
      ...new Tag(),
      id: this.editForm.get(['id'])!.value,
      title: this.editForm.get(['title'])!.value,
      metaTitle: this.editForm.get(['metaTitle'])!.value,
      slug: this.editForm.get(['slug'])!.value,
      content: this.editForm.get(['content'])!.value,
      postId: this.editForm.get(['postId'])!.value,
      postIds: this.editForm.get(['postIds'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITag>>): void {
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

  trackById(index: number, item: IPost): any {
    return item.id;
  }

  getSelected(selectedVals: IPost[], option: IPost): IPost {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }
    return option;
  }
}
