import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordValidator } from './passwordValidations';

@Component({
  selector: 'password',
  standalone: true,
  templateUrl: './password-confrimation-form.component.html',
  styleUrl: './password-confrimation-form.component.css',
  imports:[CommonModule,ReactiveFormsModule]
})
export class PasswordConfrimationFormComponent implements OnInit {
[x: string]: any;
  form = new FormGroup({
    password : new FormControl('',Validators.required,passwordValidator.oldPassword),
    newPassword : new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required)
  },{validators:passwordValidator.passwordMatch('newPassword','confirmPassword')})

  ngOnInit(): void {
    this.newPassword?.valueChanges.subscribe(() => this.form.updateValueAndValidity());
    this.confirmPassword?.valueChanges.subscribe(() => this.form.updateValueAndValidity());
  }
  
  get password(){
    return this.form.get('password');
  }
  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword')
  }
}
