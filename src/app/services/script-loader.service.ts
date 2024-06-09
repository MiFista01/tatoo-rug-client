import { Injectable } from '@angular/core';
declare function createScrollSwiper(): void;
declare function createSwiper(name:string, params:any, autoplayUpdate:boolean): void;
@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  constructor() { }
  createScroll(){
    createScrollSwiper()
  }
  createSwipers(name:string, params:any, autoplayUpdate:boolean){
    createSwiper(name, params, autoplayUpdate)
  }
}
