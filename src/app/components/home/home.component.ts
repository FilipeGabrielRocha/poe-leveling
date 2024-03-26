import { Component } from '@angular/core';
import { SectionActComponent } from '../section-act/section-act.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectionActComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
