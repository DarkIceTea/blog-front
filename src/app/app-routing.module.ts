import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
   { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
   { path: 'blogs', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
   {path: '', redirectTo: 'home', pathMatch: 'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
