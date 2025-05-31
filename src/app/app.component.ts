import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponents } from "./courses.component";
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CoursesComponents,CommonModule,PanelComponent,InputFormatDirective],
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
