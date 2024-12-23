import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs:AngularFirestore, 
                private toaster:ToastrService,
              private router:Router) { }

  uploadImage(selectedImg:any,postData:any,formStatus:any,id:any){
    const filepath=`../assets/postimg/${Date.now()}`;
    const imgURL='https://th.bing.com/th/id/OIP.tjZHF8LHukV_GiqStow3OwHaEa?rs=1&pid=ImgDetMain';
    postData.postImgPath=imgURL;

    if(formStatus=='Edit'){
      this.updateData(id,postData)
    }else{
      this.saveData(postData)
    }
    
  }

  saveData(postData:any){
    this.afs.collection('posts').add(postData).then(doctRef=>{
      this.toaster.success('Data insert Success .. ')
      this.router.navigate(['/deshboard/allpost'])
    })
  }


  updateData(id:any,postData:any){
    this.afs.collection('posts').doc(id).update(postData).then(doctRef=>{
      this.toaster.success('Data update Success .. ')
      this.router.navigate(['/deshboard/allpost'])
    })
  }

  FeaturedUpdate(id:any,featuredData:any){
    this.afs.collection('posts').doc(id).update(featuredData).then(doctRef=>{
      this.toaster.success('Feature Status updated Success .. ')
      this.router.navigate(['/deshboard/allpost'])
    })
  }

  loadPosts(){
    return this.afs.collection('posts').snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }


  loadPostById(id:any){
    return this.afs.collection('posts').doc(id).valueChanges()
  }

  deletePost(id:any,imageUrl:any){
    this.afs.collection('posts').doc(id).delete().then(ref=>{
      this.toaster.success("Data Delete Success ....!")
      this.deleteImage(imageUrl)
    }).catch(err=>{
      console.log(err)
    })
  }

  deleteImage(imageURL:any){
      /// delete Image operations
  }
}
