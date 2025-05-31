import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'udcourse-form',
  standalone: true,
  templateUrl: './udcourse-form.component.html',
  styleUrl: './udcourse-form.component.css',
  imports:[FormsModule,CommonModule]
})
export class UdcourseFormComponent {
  courses=[{id:1,courseName:"Development"},
    {id:2,courseName:"Arts"},
    {id:3,courseName:"Languages"}
  ];
    log(x:any){
    console.log(x);
  }
}
