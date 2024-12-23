import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CategoryReturn } from 'src/app/interfaces/category';
import { Post } from 'src/app/interfaces/post';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  parmalink:string=''
  imgSrc:any='./assets/img/default/img-preview.jpg';
  selectedImg:any
  categories!: CategoryReturn[];
  postForm!:FormGroup
  post:any


  formStatus:string='Add New';
  postId:string=''

  constructor(private postService:PostsService,
              private catServices:CategoriesService, 
              private fb:FormBuilder,
              private activateRoute:ActivatedRoute){

    this.activateRoute.queryParams.subscribe(val=>{
      this.postId=val['id'];
      if(this.postId!=null){
        this.formStatus="Edit";
        this.postService.loadPostById(this.postId).subscribe(post=>{
          this.post=post;
          //console.log(this.post.permalink )
           
          this.postForm=this.fb.group({
            title:[this.post.title ,[Validators.required,Validators.minLength(10)]],
            parmalink:[this.post?.permalink  ,Validators.required],
            excerpt:[this.post.excerpt ,[Validators.required,Validators.minLength(50)]],
            category:[this.post.category?.categoryId ,Validators.required],
            postImg:['',Validators.required],
            content:[this.post.content ,Validators.required]
          })
          this.imgSrc=this.post?.postImgPath 
          this.parmalink=this.post?.permalink ;
        })
      }else{
        this.postForm=this.fb.group({
          title:[ "" ,[Validators.required,Validators.minLength(10)]],
          parmalink:['' ,Validators.required],
          excerpt:['' ,[Validators.required,Validators.minLength(50)]],
          category:[ '',Validators.required],
          postImg:['',Validators.required],
          content:[ '',Validators.required]
        })
      }

      
    })
  }

  ngOnInit():void{
    this.catServices.loadData().subscribe(val=>{
      this.categories=val
    })
  }

  OnSubmit(){
   const selectedCat = this.categories.find(obj => obj.id == this.postForm.value.category)?? { id: '', data: {category:'',status:''} };

    const postData:Post = {
        title:this.postForm.value.title,
        permalink:this.postForm.value.parmalink,
        category:{
          categoryId: selectedCat.id ,
          category:selectedCat?.data.category 
        },
        postImgPath:'',
        excerpt:this.postForm.value.excerpt,
        content:this.postForm.value.content,
        isfeatured:false,
        views:0,
        likes:0,
        status:'New',
        createdAt:new Date()

    }

    this.postService.uploadImage(this.selectedImg,postData,this.formStatus,this.postId)
    console.log(postData)
  }

  get fc(){
   // return this.postForm.controls
   return this.postForm.controls as { [key: string]: FormControl };
  }
  
  OnTitleChange(event:any){
    const title=event.target.value;
    this.parmalink=title.replace(/\s/g,'-');
   // console.log(this.parmalink)
  }
  ShowPreview(event:any){
   
    const reader=new FileReader();
    reader.onload=(e)=>{     
      this.imgSrc = e.target?.result
    }
    
    reader.readAsDataURL(event.target.files[0]);
    this.selectedImg=event.target.files[0];
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '300px',
    minHeight: '200px',
    placeholder: 'Enter text here...',
    enableToolbar: true,
    showToolbar: true,
    defaultFontName: 'Times New Roman', // Set a default font
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'georgia', name: 'Georgia' },
      { class: 'sutonny-Sushree-mj', name: 'SutonnySushreeMJ' }, // Your custom font
    ]
  };
  
}
