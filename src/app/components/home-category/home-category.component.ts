import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-category',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-category.component.html',
  styleUrl: './home-category.component.scss'
})
export class HomeCategoryComponent {
  @Input() imageUrl: string = '';
  @Input() link: string = '';
  @Input() header: string = '';
  @Input() des: string = '';
}
