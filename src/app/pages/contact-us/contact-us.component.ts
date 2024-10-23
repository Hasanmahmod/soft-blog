import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with validators
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form Submitted:', formData);
      // Add logic to send the data to a backend service
      alert('Your message has been sent successfully!');
      this.contactForm.reset(); // Reset form after submission
    }
  }
}
