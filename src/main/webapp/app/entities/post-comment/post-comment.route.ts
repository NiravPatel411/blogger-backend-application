import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IPostComment, PostComment } from 'app/shared/model/post-comment.model';
import { PostCommentService } from './post-comment.service';
import { PostCommentComponent } from './post-comment.component';
import { PostCommentDetailComponent } from './post-comment-detail.component';
import { PostCommentUpdateComponent } from './post-comment-update.component';

@Injectable({ providedIn: 'root' })
export class PostCommentResolve implements Resolve<IPostComment> {
  constructor(private service: PostCommentService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPostComment> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((postComment: HttpResponse<PostComment>) => {
          if (postComment.body) {
            return of(postComment.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new PostComment());
  }
}

export const postCommentRoute: Routes = [
  {
    path: '',
    component: PostCommentComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'bloggerApp.postComment.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PostCommentDetailComponent,
    resolve: {
      postComment: PostCommentResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'bloggerApp.postComment.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PostCommentUpdateComponent,
    resolve: {
      postComment: PostCommentResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'bloggerApp.postComment.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PostCommentUpdateComponent,
    resolve: {
      postComment: PostCommentResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'bloggerApp.postComment.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
