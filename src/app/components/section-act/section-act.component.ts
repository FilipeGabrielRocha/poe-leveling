import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-act',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './section-act.component.html',
  styleUrl: './section-act.component.scss'
})
export class SectionActComponent {
  isSelected:boolean = false

  selected(){
    this.isSelected = !this.isSelected
  }
}
