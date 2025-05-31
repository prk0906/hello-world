import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contact-form',
  standalone: true,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  imports:[FormsModule,CommonModule]
})
export class ContactFormComponent {
  selectedContact:any[] = [];
  contactMethods=[
    {id:1,name:'Email'},
    {id:2,name:'phone'},
  ]
  log(x:any){
    console.log(x);
  }
  submit(f:any){
    console.log(f);
  }
}
