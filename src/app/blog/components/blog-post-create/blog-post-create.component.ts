// src/app/blog/components/blog-post-create/blog-post-create.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogPostCreate } from '../../models/blog-post-create.model';
import { BlogService } from '../../service/blog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, Observable, of, switchMap, take, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-blog-post-create',
  templateUrl: './blog-post-create.component.html',
  styleUrls: ['./blog-post-create.component.scss'],
  standalone: false
})
export class BlogPostCreateComponent implements OnInit {
  post: BlogPostCreate = {
    title: '',
    content: '',
    categoryId: '',
    privacy: 'public'
  };

  constructor(private blogService: BlogService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.createForm$()
    //   //   .pipe(switchMap(()=>this.blogService.requestBlogDetails$(1)
    //   // tap((data:any)=>{
    //   //   this.form.controls.title.setValue(data.title)
    //   // })),take(1))
    //   .pipe(tap(() => {
    //     console.log("created")
    //   }))
    //   .subscribe(()=>{
    //     this.form?.controls?.['privacy'].valueChanges
    //     .pipe(takeUntilDestroyed()).subscribe(()=>{
    //       console.log("privacy changed")
    //     })
    //   })
  }

  public form: FormGroup | null = null;

  onSubmit(): void {
    console.log('Отправка поста:', this.post);

    this.blogService.createBlogs(this.post).subscribe({
      next: (createdPost) => {
        console.log('Пост успешно создан:', createdPost);

        this.router.navigate(['/blog']);
      },
      error: (err) => {
        console.error('Ошибка при создании поста:', err);
      }
    });
  }

  private createForm$(): Observable<FormGroup> {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      content: [null, [Validators.required]],
      privacy: [1, [Validators.required]],
    })

    return of(this.form)
  }

  public submitData(){
    console.log(this.form?.controls?.['title'].value)
    console.log(this.form?.controls?.['content'].value)
    console.log(this.form?.controls?.['privacy'].value)
  }


  // public get f(){
  //   return this.form?.controls;
  // }
}