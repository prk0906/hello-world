import { Component } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserNameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule]
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username : new FormControl('',[Validators.required,
      Validators.minLength(3),
      UserNameValidators.cannotConatinSpace],
      UserNameValidators.shouldBeUnique),
      password : new FormControl('',Validators.required)
    })
  });

  logIn(){
    this.form.setErrors({
      inValidLogin:true
    });
  }

  get userName(){
    return this.form.get('account.username');
  }
  get passWord(){
    return this.form.get('account.password');
  }
}
