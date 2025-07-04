// src/app/blog/components/blog-post-create/blog-post-create.component.ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BlogPostCreate } from '../../models/blog-post-create.model';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-post-create',
  templateUrl: './blog-post-create.component.html',
  styleUrls: ['./blog-post-create.component.scss'],
  standalone: false
})
export class BlogPostCreateComponent {
  post: BlogPostCreate = {
    Title: '',
    Content: '',
    CategoryIds: [], 
    Privacy: 'public'
  };

  constructor(private blogService: BlogService, private router: Router) { }

  onSubmit(): void {
    console.log('Отправка поста:', this.post);

    this.blogService.createPost(this.post).subscribe({
      next: (createdPost) => {
        console.log('Пост успешно создан:', createdPost);
        
        this.router.navigate(['/blog']);
      },
      error: (err) => {
        console.error('Ошибка при создании поста:', err);
      }
    });
  }
}