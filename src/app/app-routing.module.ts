import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  {
    path: '', // Default home page
    component: HomeComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: 'posts/:id', // URL with params
    component: PostDetailComponent,
  },
  {
    path: '**', // 404 Page
    component: PageNotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
