import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RegistrationComponent {
  formData: any = {};

  onSubmit() {
    // Handle form submission here, e.g., send data to a server or perform other actions
    console.log(this.formData);
  }
}
