import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category, CategoryReturn } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories!: CategoryReturn[];
  formCategory!:string;
  formStatus:string="Add"
  id!:any;

  constructor(private categoriServices:CategoriesService,private toastr:ToastrService){}

  ngOnInit(){
    this.categoriServices.loadData().subscribe(data=>{
      this.categories=data;
    })
  }

  OnEdit(data:any,id:any){
    this.formCategory=data;
    this.formStatus="Edit";
    this.id=id;
  }

  deleteData(id:any){
    this.categoriServices.deleteData(id)
  }

  OnSubmit(formData:any){
  
    let categoryData : Category={
      category:formData.value.category,
      status:'active'
    }

    if(this.formStatus=='Add'){
      this.categoriServices.saveData(categoryData)
      formData.reset();
    }else if(this.formStatus=='Edit'){
      this.categoriServices.editData(this.id,categoryData)
      formData.reset();
    }
  }

  OnDelete(data: any, id: any) {
    const toast = this.toastr.warning(
      `Are you sure you want to delete this ${data}?`,
      'Confirm Deletion',
      {
        timeOut: 0, // Disable timeout for confirmation
        closeButton: false, // Not Allow manual dismissal
        tapToDismiss: false, // Prevent auto-dismiss on click
        enableHtml: true, // Allow HTML content in the message
      }
    );
  
    // Wait for the Toastr DOM to initialize properly
    setTimeout(() => {
      const toastContainer = document.querySelector('.toast-warning'); // Target the specific toast
      if (toastContainer) {
        // Add custom buttons dynamically
        toastContainer.innerHTML += `
          <div class="text-center mt-3">
            <button id="confirmYes" class="btn btn-danger btn-sm me-2">Yes</button>
            <button id="confirmNo" class="btn btn-secondary btn-sm">No</button>
          </div>
        `;
  
        // Attach event listeners to the buttons
        document.getElementById('confirmYes')?.addEventListener('click', () => {
          this.toastr.clear(toast.toastId); // Clear the toast
          this.deleteData(id); // Perform the delete action
        });
  
        document.getElementById('confirmNo')?.addEventListener('click', () => {
          this.toastr.clear(toast.toastId); // Dismiss the toast
        });
      }
    }, 0); // Allow time for DOM rendering
  }
  
  toggleStatus(data:any,id:any){
    data.status = (data.status === "Active") ? "Inactive" : "Active";
    this.categoriServices.toggleDataStatus(id,data)

  }
}
