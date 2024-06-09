import { Component, afterRender } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { ScriptLoaderService } from '../../services/script-loader.service';
import { SessionStorageService } from '../../services/session-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  params = {
    direction: 'horizontal',
    effect: "flip",
    grabCursor: false,
    loop: false,
    nested: true,
    mousewheel: {
      enabled: true,  // Включение обработки событий колесика мыши
    },
    mousewheelControl: true,
    speed: 600,
    autoplay: false,
  };
  constructor(
    private route: Router,
    private sessionStorageService: SessionStorageService,
    private scriptLoader: ScriptLoaderService
  ) {
    afterRender(() => {
      if (this.route.url != this.sessionStorageService.getItem("url")) {
        this.sessionStorageService.removeItem("activeSlide")
      }
      this.scriptLoader.createScroll()
      this.scriptLoader.createSwipers("#about-swiper", this.params, false)
    });
  }
}
