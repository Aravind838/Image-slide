import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  detailsForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
  }

  validation_messages = {
    'firstname': [
      { type: 'required', message: 'First Name is required.' },
      { type: 'minlength', message: 'First Name must be at least 8 characters long.' },
      { type: 'pattern', message: 'Only Alphabets are allowed.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last Name is required.' },
      { type: 'pattern', message: 'Only Alphabets are allowed.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid Email.' }
    ],
    'password1': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
  }

  ngOnInit() {
    this.detailsForm = this.fb.group({
      firstname: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.pattern('^[a-zA-Z\s]*$'),
        Validators.required
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.pattern('^[a-zA-Z\s]*$'),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.pattern('^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{2,}$'),
        Validators.required
      ])),
      password1: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
    });
  }

  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
}

terms() {
  window.alert('I Agree to your Terms and Conditions');
}
onFormSubmit(form: NgForm) {
  console.log(form);
}
}
