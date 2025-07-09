import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogPostCreateComponent } from './components/blog-post-create/blog-post-create.component';
import { BlogPostDetailComponent } from './components/blog-post-detail/blog-post-detail.component';

const routes: Routes = [
  { path: ':id', component: BlogPostDetailComponent },
  { path: 'create', component: BlogPostCreateComponent },
  { path: '', component: BlogListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
