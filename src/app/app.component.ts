import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdcourseFormComponent } from './udcourse-form/udcourse-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CommonModule, ContactFormComponent,UdcourseFormComponent,SignupFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  // post={
  //   title:"Title",
  //   isFavorite : false
  // }
  // onFavChange(eventArgs:{newValue:boolean}){
  //   console.log("Fav Changed ",eventArgs);
  // }
  // tweet={
  //   body:'Here is a body of a tweet...',
  //   isLiked : true,
  //   likesCount:10
  // }
  // onLikeChanged($event:any){
  //   console.log("like state Changes ",$event);
  // }

    // viewmode = 'somethingElses';

  //ngFor
  courses: any;
  onAdd()
  {
    this.courses.push({id:4,course:"Course4"});
  }
  OnRemove(course:any)
  {
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
  loadCourses(){
    this.courses=[
    {id:1,course:"course1"},
    {id:2,course:"course2"},
    {id:3,course:"course3"},
  ]
  }
  trackCourse(index:any,course:any){
    return course?course.id:undefined
  }

  // ngStyle
  canSave = true;

  //ngSafeTravesal

  task={
    title:'Review application',
    assigne:null
  }
}
