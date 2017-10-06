import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'home', component: PostsComponent},
  { path: 'post', component: PostComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
