import { Component, afterRender } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../services/session-storage.service';
import { ScriptLoaderService } from '../../services/script-loader.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
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
    });
  }
  galleryItems = [
    {
      "link":"1",
      "img":"http://loremflickr.com/480/640/abstract",
      "title":"Regional Directives Executive",
      "des":"Reiciendis mollitia quia consequatur optio id. Animi harum quasi. Id aut numquam ut deserunt enim. Laboriosam esse voluptates provident.Voluptates asperiores numquam quia fugiat at aperiam assumenda sit ipsam. Aut rerum alias hic ratione. Ab sunt rerum accusantium architecto facere quia voluptas itaque."
    },
    {
      "link":"2",
      "img":"http://loremflickr.com/480/640/abstract",
      "title":"Regional Directives Executive",
      "des":"Reiciendis mollitia quia consequatur optio id. Animi harum quasi. Id aut numquam ut deserunt enim. Laboriosam esse voluptates provident.Voluptates asperiores numquam quia fugiat at aperiam assumenda sit ipsam. Aut rerum alias hic ratione. Ab sunt rerum accusantium architecto facere quia voluptas itaque."
    },
    {
      "link":"3",
      "img":"http://loremflickr.com/480/640/abstract",
      "title":"Regional Directives Executive",
      "des":"Reiciendis mollitia quia consequatur optio id. Animi harum quasi. Id aut numquam ut deserunt enim. Laboriosam esse voluptates provident.Voluptates asperiores numquam quia fugiat at aperiam assumenda sit ipsam. Aut rerum alias hic ratione. Ab sunt rerum accusantium architecto facere quia voluptas itaque."
    },
    {
      "link":"4",
      "img":"http://loremflickr.com/480/640/abstract",
      "title":"Regional Directives Executive",
      "des":"Reiciendis mollitia quia consequatur optio id. Animi harum quasi. Id aut numquam ut deserunt enim. Laboriosam esse voluptates provident.Voluptates asperiores numquam quia fugiat at aperiam assumenda sit ipsam. Aut rerum alias hic ratione. Ab sunt rerum accusantium architecto facere quia voluptas itaque."
    },
    {
      "link":"1",
      "img":"http://loremflickr.com/480/640/abstract",
      "title":"Regional Directives Executive",
      "des":"Reiciendis mollitia quia consequatur optio id. Animi harum quasi. Id aut numquam ut deserunt enim. Laboriosam esse voluptates provident.Voluptates asperiores numquam quia fugiat at aperiam assumenda sit ipsam. Aut rerum alias hic ratione. Ab sunt rerum accusantium architecto facere quia voluptas itaque."
    },
    {
      "link":"2",
      "img":"http://loremflickr.com/480/640/abstract",
      "title":"Regional Directives Executive",
      "des":"Reiciendis mollitia quia consequatur optio id. Animi harum quasi. Id aut numquam ut deserunt enim. Laboriosam esse voluptates provident.Voluptates asperiores numquam quia fugiat at aperiam assumenda sit ipsam. Aut rerum alias hic ratione. Ab sunt rerum accusantium architecto facere quia voluptas itaque."
    },
    
  ]
}
