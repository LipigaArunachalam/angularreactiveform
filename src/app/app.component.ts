import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  feedback = {
    name: '',
    email: '',
    message: ''
  };
  submitted = false;

  onSubmit() {
    if (this.feedback.name && this.feedback.email && this.feedback.message) {
      this.submitted = true;
      console.log('Feedback submitted:', this.feedback);
    }
  }
}
