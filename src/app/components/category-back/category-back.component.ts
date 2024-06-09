import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-back',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-back.component.html',
  styleUrl: './category-back.component.scss'
})
export class CategoryBackComponent {
  slidersStats = 
    {
      countSliders: 3,
      countSlides: 3,
      countObjs:4
    }
}
