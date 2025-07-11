import { Component, OnInit } from '@angular/core';
import { BlogPostView } from '../../models/blog-post-view.model';
import { BlogService } from '../../service/blog.service';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  standalone: false
})
export class BlogListComponent implements OnInit {
  posts: BlogPostView[] = [];
  isLoading = true;

  constructor(private blogService: BlogService) { }
  ngOnInit(): void {
    this.blogService.getAllBlogs(null).subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
        console.log('Посты успешно загружены:', data);
        console.log("Posts ", this.posts)
      },
      error: (err) => {
        console.error('Ошибка при загрузке постов:', err);
        this.isLoading = false;
      }
    });
  }

  searchByTag(tag:string){
    this.isLoading = true;
    this.blogService.getPostsByTag(tag).subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
        console.log('Посты успешно загружены:', data);
        console.log("Posts ", this.posts)
      },
      error: (err) => {
        console.error('Ошибка при загрузке постов:', err);
        this.isLoading = false;
      }
    });
  }

  searchBlogs(searchTerm: string){
    this.isLoading = true
    this.blogService.getAllBlogs(searchTerm).subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
        console.log('Посты успешно загружены:', data);
        console.log("Posts ", this.posts)
      },
      error: (err) => {
        console.error('Ошибка при загрузке постов:', err);
        this.isLoading = false;
      }
    });
  }
}