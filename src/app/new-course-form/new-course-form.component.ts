import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'new-course-form',
  standalone: true,
  templateUrl: './new-course-form.component.html',
  styleUrl: './new-course-form.component.css',
  imports:[CommonModule]
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics : new FormArray([])
  });
  
  get topics(): FormArray {
  return this.form.get('topics') as FormArray;
}
  addTopic(topic: HTMLInputElement){
    console.log(topic.value);
    this.topics.push(new FormControl(topic.value))
  }
}
