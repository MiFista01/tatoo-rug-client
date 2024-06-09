import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/home/home.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoaderComponent,
    HeaderComponent,
    HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0, display: 'none' })),
      transition('visible => hidden', animate('300ms')),
      transition('hidden => visible', animate('300ms'))
    ])
  ]
})
export class AppComponent {
  ngAfterViewInit() {
    this.hideLoader();
  }

  hideLoader() {
    
  }
}
