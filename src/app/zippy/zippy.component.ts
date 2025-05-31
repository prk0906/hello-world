import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'zippy',
  standalone: true,
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css',
  imports:[CommonModule]
})
export class ZippyComponent {
  @Input('title') title:string | undefined;
  isExpanded :boolean | undefined ;
  toggle()
  {
    this.isExpanded = !this.isExpanded;
  }
}
