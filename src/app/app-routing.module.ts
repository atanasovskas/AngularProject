import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './post/add-post/add-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { ListPostsComponent } from './post/list-posts/list-posts.component';
import { DeletePostComponent } from './post/delete-post/delete-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';

const routes: Routes = [

{path:'list',children:[
  {path:'',component:ListPostsComponent},
  {path:'create',component:AddPostComponent},
  {path:'view/:id',component:ViewPostComponent},
  {path:'edit/:id',component:EditPostComponent},
]},

{ path: '', redirectTo:'/list', pathMatch:"full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
