import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'application-user',
        loadChildren: () => import('./application-user/application-user.module').then(m => m.BloggerApplicationUserModule),
      },
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.BloggerPostModule),
      },
      {
        path: 'post-comment',
        loadChildren: () => import('./post-comment/post-comment.module').then(m => m.BloggerPostCommentModule),
      },
      {
        path: 'tag',
        loadChildren: () => import('./tag/tag.module').then(m => m.BloggerTagModule),
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.BloggerCategoryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class BloggerEntityModule {}
