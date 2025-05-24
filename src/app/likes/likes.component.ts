import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'likes',
  standalone: true,
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.css'
})
export class LikesComponent {
  @Input() isLiked:boolean = true;
  @Input() likesCount = 10;
  onClick()
  {
    this.likesCount += (!this.isLiked) ?1:-1;
    this.isLiked = !this.isLiked;
  }
}
