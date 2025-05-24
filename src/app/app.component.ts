import { FavComponent } from './fav/fav.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponents } from "./courses.component";
import { CommonModule } from '@angular/common';
import { title } from 'process';
import { PanelComponent } from './panel/panel.component';
import { LikesComponent } from './likes/likes.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CoursesComponents,CommonModule,FavComponent,PanelComponent,LikesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  post={
    title:"Title",
    isFavorite : false
  }
  onFavChange(eventArgs:{newValue:boolean}){
    console.log("Fav Changed ",eventArgs);
  }
  tweet={
    body:'Here is a body of a tweet...',
    isLiked : true,
    likesCount:10
  }
  onLikeChanged($event:any){
    console.log("like state Changes ",$event);
  }
}
