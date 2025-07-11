// src/app/blog/services/blog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPostView } from '../models/blog-post-view.model';
import { BlogPostCreate } from '../models/blog-post-create.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 
  private apiUrl = 'https://localhost:7204/api/blog'; 

  constructor(private http: HttpClient) { }
  
  public getAllBlogs(searchTerm: string | null): Observable<BlogPostView[]> {
    if(searchTerm){
      return this.http.get<BlogPostView[]>(this.apiUrl, {params: {searchTerm: searchTerm}})
    }else{
      return this.http.get<BlogPostView[]>(this.apiUrl);
    }
  }

  public getPostsByTag(tag: string){
    return this.http.get<BlogPostView[]>(this.apiUrl + "/tags", {params: {tag: tag}})
  }
 
  public createBlogs(postData: BlogPostCreate): Observable<BlogPostView> {
    return this.http.post<BlogPostView>(this.apiUrl, postData);
  }

  public getPostById(id: string): Observable<BlogPostView> {
    return this.http.get<BlogPostView>(`${this.apiUrl}/${id}`);
  }
}