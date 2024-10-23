import { Component, HostListener, } from '@angular/core';

@Component({
  selector: 'app-nave-bar',
  templateUrl: './nave-bar.component.html',
  styleUrls: ['./nave-bar.component.css']
})
export class NaveBarComponent {


  isSticky: boolean = false; // To track if the navbar should be sticky

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    if (offset > 50) { // Sticky after 100px scroll
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

}
