import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CategoryReturn } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

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
  postForm:FormGroup

  constructor(private catServices:CategoriesService, private fb:FormBuilder){
    this.postForm=this.fb.group({
      title:['',[Validators.required,Validators.minLength(10)]],
      parmalink:['',Validators.required],
      excerpt:['',[Validators.required,Validators.minLength(50)]],
      category:['',Validators.required],
      postImg:['',Validators.required],
      content:['',Validators.required]
    })
  }

  ngOnInit():void{
    this.catServices.loadData().subscribe(val=>{
      this.categories=val
    })
  }

  get fc(){
    return this.postForm.controls
  }
  
  OnTitleChange(event:any){
    const title=event.target.value;
    this.parmalink=title.replace(/\s/g,'-');
    console.log(this.parmalink)
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
