import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPostComment } from 'app/shared/model/post-comment.model';
import { PostCommentService } from './post-comment.service';

@Component({
  templateUrl: './post-comment-delete-dialog.component.html',
})
export class PostCommentDeleteDialogComponent {
  postComment?: IPostComment;

  constructor(
    protected postCommentService: PostCommentService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.postCommentService.delete(id).subscribe(() => {
      this.eventManager.broadcast('postCommentListModification');
      this.activeModal.close();
    });
  }
}
