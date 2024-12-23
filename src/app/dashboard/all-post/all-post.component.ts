import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  Posts!:any[]
  constructor(private postServices:PostsService){}
  ngOnInit(): void {
    this.postServices.loadPosts().subscribe(posts=>{
      console.log(posts)
      this.Posts=posts
    })
  }

 

  OnDelete(id:any,imageUrl:any){
    console.log("Delete hit")
    this.postServices.deletePost(id,imageUrl)
  }

  OnFeatured(id:any,value:any){
    const featuredData={
      isfeatured:value
    }
    this.postServices.FeaturedUpdate(id,featuredData)
  }
}
