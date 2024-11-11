import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private afs:AngularFirestore, private toster:ToastrService) { }

  saveData(data:any){

    this.afs.collection('categories').add(data).then(ref=>{
      console.log(ref)
      this.toster.success("Data save Success ....!")
    }).catch(err=>{
      console.log(err)
    })
  }

loadData(){
  return this.afs.collection('categories').snapshotChanges().pipe(
    map(action=>{
      return action.map(a=>{
        const data : any =a.payload.doc.data();
        const id=a.payload.doc.id;
        return {id,data}
      })
    })
  )
}


editData(id:any,editdata:any){
  this.afs.collection('categories').doc(id).update(editdata).then(ref=>{
    this.toster.success("Data Update Success ....!")
  }).catch(err=>{
    console.log(err)
  })
}

deleteData(id:any){
  this.afs.collection('categories').doc(id).delete().then(ref=>{
    this.toster.success("Data Delete Success ....!")
  }).catch(err=>{
    console.log(err)
  })
}

toggleDataStatus(id:any,editdata:any){
  this.afs.collection('categories').doc(id).update(editdata).then(ref=>{
    this.toster.success("Data Update Success ....!")
  }).catch(err=>{
    console.log(err)
  })
}

  saveDaTest(){  
  
    let categoryData={
      category:'Category',
      status:'active'
    }

    let subcategoryData={
      category:'sub Category',
      status:'active'
    }

    let subsubcategoryData={
      category:'sub Category',
      status:'active'
    }

    this.afs.collection('categories').add(categoryData).then(ref=>{
      console.log(ref)
      // Saving sub category in nested categori

      // this.afs.doc(`categories/${ref.id}`).collection('subcategories').add(subcategoryData) ....

      this.afs.collection('categories').doc(ref.id).collection('subcategories').add(subcategoryData).then(sref=>{
        console.log(sref)
         this.afs.collection('categories').doc(ref.id).collection('subcategories').doc(sref.id).collection('subsubcategories').add(subsubcategoryData).then(ssref=>{
              console.log(ssref)
           }).catch(err=>{
                console.log(err)
             })
      }).catch(err=>{
        console.log(err)
      })
    }).catch(err=>{
      console.log(err)
    })
  }
}
