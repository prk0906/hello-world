import { Component, Input,output,Output,EventEmitter, ViewEncapsulation } from '@angular/core';
import { eventNames } from 'process';

@Component({
  selector: 'fav',
  standalone: true,
  templateUrl: './fav.component.html',
  // styleUrl: './fav.component.css',
  encapsulation:ViewEncapsulation.None
})
export class FavComponent {

   @Input('is-Favorite') isSelected:boolean | undefined;
   @Output('change') change =  new  EventEmitter();
  onClick()
  {
    this.isSelected = !this.isSelected;
    this.change.emit({newvalue:this.isSelected});
  }
}
