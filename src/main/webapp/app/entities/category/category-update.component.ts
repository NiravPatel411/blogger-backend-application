import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { ICategory, Category } from 'app/shared/model/category.model';
import { CategoryService } from './category.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { IPost } from 'app/shared/model/post.model';
import { PostService } from 'app/entities/post/post.service';

type SelectableEntity = ICategory | IPost;

@Component({
  selector: 'jhi-category-update',
  templateUrl: './category-update.component.html',
})
export class CategoryUpdateComponent implements OnInit {
  isSaving = false;
  categories: ICategory[] = [];
  posts: IPost[] = [];

  editForm = this.fb.group({
    id: [],
    parentId: [],
    postId: [],
    title: [],
    metaTitle: [],
    slug: [],
    content: [],
    parentIdId: [],
    postIds: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected categoryService: CategoryService,
    protected postService: PostService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ category }) => {
      this.updateForm(category);

      this.categoryService.query().subscribe((res: HttpResponse<ICategory[]>) => (this.categories = res.body || []));

      this.postService.query().subscribe((res: HttpResponse<IPost[]>) => (this.posts = res.body || []));
    });
  }

  updateForm(category: ICategory): void {
    this.editForm.patchValue({
      id: category.id,
      parentId: category.parentId,
      postId: category.postId,
      title: category.title,
      metaTitle: category.metaTitle,
      slug: category.slug,
      content: category.content,
      parentIdId: category.parentIdId,
      postIds: category.postIds,
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
    const category = this.createFromForm();
    if (category.id !== undefined) {
      this.subscribeToSaveResponse(this.categoryService.update(category));
    } else {
      this.subscribeToSaveResponse(this.categoryService.create(category));
    }
  }

  private createFromForm(): ICategory {
    return {
      ...new Category(),
      id: this.editForm.get(['id'])!.value,
      parentId: this.editForm.get(['parentId'])!.value,
      postId: this.editForm.get(['postId'])!.value,
      title: this.editForm.get(['title'])!.value,
      metaTitle: this.editForm.get(['metaTitle'])!.value,
      slug: this.editForm.get(['slug'])!.value,
      content: this.editForm.get(['content'])!.value,
      parentIdId: this.editForm.get(['parentIdId'])!.value,
      postIds: this.editForm.get(['postIds'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICategory>>): void {
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
