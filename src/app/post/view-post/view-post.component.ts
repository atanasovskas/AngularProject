import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import{MatButtonModule} from '@angular/material/button'
import { DialogService } from '../delete-post/dialog.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent implements OnInit{

  id!:number
  postDetails:any

  constructor(private postService:PostService,private activatedRoute:ActivatedRoute,private router:Router,private dialogService:DialogService){}

  ngOnInit(): void {
 
    this.activatedRoute.params.subscribe(data=>{
      this.id=data['id']
    })

    this.postService.viewPost(this.id).subscribe(data=>{
      this.postDetails=data
    })
  }
  onDelete() {
    const message = "Are you sure you want to delete this item";
    
    this.dialogService.openConfirmationDialog(message).subscribe(result => {
      if (result) {
        this.activatedRoute.params.subscribe(data => {
          this.id = data['id'];
        });
  
        if (this.id) {
          this.postService.deletePost(this.id).subscribe(data => {
            console.log("delete");
            this.router.navigateByUrl('list');
          }, err => {
            console.log('error');
          });
        }
      }
    });
  }
}
