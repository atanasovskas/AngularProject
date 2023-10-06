import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit{

   posts:any
   isHovered: boolean[] = []; 

  constructor(private postService:PostService){}

  ngOnInit(): void {
 
  this.postService.listPost().subscribe(data=>{
    this.posts=data
    });
   
  }

}
