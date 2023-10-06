import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss']
})
export class DeletePostComponent implements OnInit{
      
      id!:number

       constructor(private activatedRoute:ActivatedRoute,private postService:PostService, private router:Router){}
  
       ngOnInit(): void {
       
  }
  

}
