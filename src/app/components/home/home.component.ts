import { Component, afterNextRender, afterRender } from '@angular/core';
import { HomeCategoryComponent } from '../home-category/home-category.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { SessionStorageService } from '../../services/session-storage.service';
import { Router } from '@angular/router';
import { TutorialAccordionBoxComponent } from '../tutorial-accordion-box/tutorial-accordion-box.component';
import { CategoryBackComponent } from '../category-back/category-back.component';
import { ScriptLoaderService } from '../../services/script-loader.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HomeCategoryComponent,
    CategoryBackComponent,
    TutorialAccordionBoxComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  params = {
    direction: 'horizontal',
    grabCursor: false,
    loop: true,
    nested: true,
    allowTouchMove: false,
    lazy: true,
    autoplay: {
      delay: 0, // Задержка между слайдами
      disableOnInteraction: false,
      reverseDirection: false
    },
    speed: 50000,
    queueEndCallbacks: true,
    slidesPerView: 'auto',
    momentumRatio: 1,
    longSwipes: true,
  };
  // params.autoplay.reverseDirection = true    
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
      this.scriptLoader.createSwipers("#gallery1", this.params, true)
      this.params.autoplay.reverseDirection = true
      this.scriptLoader.createSwipers("#gallery2", this.params, true)
      this.params.autoplay.reverseDirection = false
      this.scriptLoader.createSwipers("#gallery3", this.params, true)
    });
  }
  ngOnInit() {

  }
  categories: string[][] = [
    ["assets/imgs/categories/kids3.svg", "kids", "rugs for kids", "Give your child a wonderful gift. A custom rug will pleasantly surprise your child"],
    ["assets/imgs/categories/friend1.jpg", "all", "rugs for all", "order a rug for a friend or family member. such a gift to surprise him"],
    ["assets/imgs/categories/xxx1.png", "xxx", "XXX rugs", "Give your partner an unusual gift. the rug will definitely surprise him"],
    ["assets/imgs/categories/celebrate1.png", "celebrate", "rugs for celebrateing", "surprise someone important to you with a holiday rug. such a gift will be remembered for a long time"]
  ]
  accordion: string[][] = [[]]
}
