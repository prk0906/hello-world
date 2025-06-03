import { Component } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule]
})
export class SignupFormComponent {
  form = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(3)]),
    password : new FormControl('',Validators.required)
  })

  get userName(){
    return this.form.get('username');
  }
  get passWord(){
    return this.form.get('password');
  }
}
