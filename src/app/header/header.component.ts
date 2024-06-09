import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsDirective } from '../directives/tabs.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TabsDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
