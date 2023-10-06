import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OnSameUrlNavigation, Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  addPostForm!:FormGroup
  formSubmited:boolean=false

  constructor(private formBuilder:FormBuilder,private postService:PostService,    private router:Router){}

  ngOnInit(): void {
    this.addPostForm=this.formBuilder.group({
      'title':new FormControl('',[Validators.required,Validators.maxLength(50)]),
      'url':new FormControl('',[Validators.required]),
      'thumbnailUrl':new FormControl('',[Validators.required]),
      'albumId':new FormControl('',[Validators.required])

    })
  }

  createPost(){
      this.formSubmited = true;
  if(this.addPostForm.valid){
    this.postService.addPost(this.addPostForm.value).subscribe(data=>{
         console.log("created")
         this.router.navigateByUrl('list')
    },err=>{
      console.log(err);
    });
      }

  }


  cancel(){
    this.router.navigateByUrl('list')
  }


}
