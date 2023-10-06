import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './post/navbar/navbar/navbar.component';
import { ListPostsComponent } from './post/list-posts/list-posts.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { DeletePostComponent } from './post/delete-post/delete-post.component';
import{HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { LazyImgDirective } from './post/list-posts/lazy-image.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPostsComponent,
    ViewPostComponent,
    AddPostComponent,
    EditPostComponent,
    DeletePostComponent,
    LazyImgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
