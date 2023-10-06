import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 postUrl='https://jsonplaceholder.typicode.com/photos'

  constructor(private http:HttpClient) { }

  listPost(){
     return this.http.get(this.postUrl)
  }

  viewPost(id:number){
    return this.http.get(`${this.postUrl}/${id}`);
  }

  addPost(postObj:any){
    return this.http.post(this.postUrl,postObj)
  }

  deletePost(id:any){
    return this.http.delete(`${this.postUrl}/${id}`)
  }

  updatePost(id:any,postObj:any){
    return this.http.put(`${this.postUrl}/${id}`, postObj)
  }
}
