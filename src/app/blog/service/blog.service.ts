// src/app/blog/services/blog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPostView } from '../models/blog-post-view.model';
import { BlogPostCreate } from '../models/blog-post-create.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 
  private apiUrl = 'http://localhost:5000/api/posts'; 

  constructor(private http: HttpClient) { }
  
  getPosts(): Observable<BlogPostView[]> {
    return this.http.get<BlogPostView[]>(this.apiUrl);
  }
 
  createPost(postData: BlogPostCreate): Observable<BlogPostView> {
    return this.http.post<BlogPostView>(this.apiUrl, postData);
  }
}