import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../service/blog.service';
import { BlogPostView } from '../../models/blog-post-view.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-post-detail',
  standalone: false,
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.scss']
})
export class BlogPostDetailComponent implements OnInit {
  // Мы будем использовать async pipe, поэтому тип свойства - Observable.
  // Это элегантный способ работы с асинхронными данными в шаблоне.
  post$!: Observable<BlogPostView>;

  constructor(
    private route: ActivatedRoute, // Сервис для получения информации о текущем маршруте, включая параметры (:id)
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    // 1. Получаем id из URL
    const id = this.route.snapshot.paramMap.get('id');

    // 2. Проверяем, что id существует (хорошая практика)
    if (id) {
      // 3. Вызываем метод сервиса и присваиваем результат (Observable) нашему свойству post$
      this.post$ = this.blogService.getPostById(id);
    }
  }
}