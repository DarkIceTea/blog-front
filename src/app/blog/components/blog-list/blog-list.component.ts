import { Component, OnInit } from '@angular/core';
import { BlogPostView } from '../../models/blog-post-view.model';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  standalone: false
})
export class BlogListComponent implements OnInit {
  posts: BlogPostView[] = [];
  isLoading = true; // Флаг для отображения индикатора загрузки

  constructor(private blogService: BlogService) { }
  ngOnInit(): void {
    this.blogService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
        console.log('Посты успешно загружены:', data);
      },
      error: (err) => {
        console.error('Ошибка при загрузке постов:', err);
        this.isLoading = false;
      }
    });
  }
}