import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { SinglePostComponent } from './components/list-posts/single-post/single-post.component';


const routes: Routes = [
  { path : '', redirectTo : '/users', pathMatch : 'full' },
  { path : 'users', component : ListUsersComponent },
  { path : 'users/:id/posts', component : ListPostsComponent },
  { path : 'users/:id/posts/:postId', component : SinglePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
