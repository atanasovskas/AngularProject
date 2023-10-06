import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  id:any
  details:any
  formSubmited:boolean=false
  editForm:FormGroup=new FormGroup({})
  dataLoaded:boolean=false

  constructor(private activatedRoute:ActivatedRoute,private postService:PostService,private formBuilder:FormBuilder,private router:Router){}
 
 
  ngOnInit(): void {
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe(data=>{
    this.id=data['id'];
    });

    if(this.id!==''){

      this.postService.viewPost(this.id)
      .toPromise()
      .then(data=>{
         this.details=data;
         Object.assign(this.details, data)
       
     

    this.editForm=this.formBuilder.group({
      'title':new FormControl(this.details.title),
      'url':new FormControl(this.details.url),
      'thumbnailUrl':new FormControl(this.details.thumbnailUrl),
      'albumId':new FormControl(this.details.albumId)
    })

    this.dataLoaded=true;
  })

  .catch(err=>{
    console.log(err)
  })

   }
  }

  editPost() {

    this.formSubmited = true;
    if (this.editForm.valid) {
      this.postService.updatePost(this.id, this.editForm.value).subscribe(data => {
        console.log("update")
        this.router.navigateByUrl('list')
      }, err => {
        console.log(err);
      });
    }
  }
  
  cancel(){
    this.router.navigateByUrl('list/view/'+this.id)
  }


}
