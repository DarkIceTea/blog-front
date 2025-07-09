import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogPostCreateComponent } from './components/blog-post-create/blog-post-create.component';
import { BlogPostDetailComponent } from './components/blog-post-detail/blog-post-detail.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogPostCreateComponent,
    BlogPostDetailComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
