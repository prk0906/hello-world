import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesService } from "./courses.service";
import { FormsModule } from "@angular/forms";
import { SummaryPipe } from "./summary.pipe";

@Component({
    selector:'course',
    standalone:true,
    imports:[CommonModule,FormsModule],
    providers:[CoursesService],
    template:`
        <!-- {{ course.courseTitle | uppercase | lowercase}} <br>
        {{ course.rating | number:'1.3-3'}} <br>
        {{ course.students | number }} <br>
        {{ course.price | currency:'INR'}} <br>
        {{ course.releaseDate | date:"short"}} <br> -->
        <!-- {{ text | summary:10 }} -->
        <span  class="bi bi-star"></span>

    `
})

export class CoursesComponents
{
    // course={
    //     courseTitle:"The Complete Angular Course",
    //     rating : 4.5234,
    //     students : 4320,
    //     price : 190.5,
    //     releaseDate : new Date(2025,5,12)
    // }
    text =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien in fermentum vestibulum,
     odio nibh bibendum nulla, at fermentum lectus ipsum vel nisi. Nam sodales augue nec justo sollicitudin, 
     vel vulputate nisi varius. Nullam eu lectus in diam vehicula dictum. Integer fermentum velit nec augue ullamcorper, 
     sed vulputate elit aliquam. Suspendisse potenti. Phasellus scelerisque, justo ac suscipit volutpat, sapien
      augue finibus mauris, nec bibendum orci ligula ut nisl. Duis at eros sed libero convallis scelerisque.
       Nunc accumsan nisi ut sapien tristique, a facilisis diam luctus. Proin convallis ante nec sapien iaculis, 
       non suscipit velit bibendum. Integer congue risus nec est finibus, vitae lacinia ligula tempor. 
       Pellentesque at pulvinar velit, a laoreet magna. Morbi congue
     mauris quis sollicitudin dictum. Quisque convallis turpis eget eros porta, sed malesuada sapien bibendum.` 
}