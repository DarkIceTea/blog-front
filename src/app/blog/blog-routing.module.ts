import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogPostCreateComponent } from './components/blog-post-create/blog-post-create.component';

const routes: Routes = [{ path: '', component: BlogComponent },
  { path: 'create', component: BlogPostCreateComponent },
  { path: '', component: BlogListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
