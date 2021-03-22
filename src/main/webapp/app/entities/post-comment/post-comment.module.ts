import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BloggerSharedModule } from 'app/shared/shared.module';
import { PostCommentComponent } from './post-comment.component';
import { PostCommentDetailComponent } from './post-comment-detail.component';
import { PostCommentUpdateComponent } from './post-comment-update.component';
import { PostCommentDeleteDialogComponent } from './post-comment-delete-dialog.component';
import { postCommentRoute } from './post-comment.route';

@NgModule({
  imports: [BloggerSharedModule, RouterModule.forChild(postCommentRoute)],
  declarations: [PostCommentComponent, PostCommentDetailComponent, PostCommentUpdateComponent, PostCommentDeleteDialogComponent],
  entryComponents: [PostCommentDeleteDialogComponent],
})
export class BloggerPostCommentModule {}
