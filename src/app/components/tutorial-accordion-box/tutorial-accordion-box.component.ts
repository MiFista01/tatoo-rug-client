import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial-accordion-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutorial-accordion-box.component.html',
  styleUrl: './tutorial-accordion-box.component.scss'
})
export class TutorialAccordionBoxComponent {
  steps = [
    {
      img:"orderForm",
      header:"Fill form",
      text:"You fill out the form and they will show you the approximate price of the carpet"
    },
    {
      img:"orderGet",
      header:"Receiving a message from you",
      text:"We see that you ordered a carpet and contact you about the exact price of the carpet and by what date the carpet is needed"
    },
    {
      img:"orderCreate",
      header:"Making a rug",
      text:"Within the agreed time, we make the rug, simultaneously changing the production status"
    },
    {
      img:"orderBack",
      header:"Dispatch of goods",
      text:"Within the agreed time, we make the rug, simultaneously changing the production status"
    }
  ]
}
