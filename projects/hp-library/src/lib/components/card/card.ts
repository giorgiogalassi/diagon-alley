import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, output } from '@angular/core';

import { Item } from '../../cart.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
  item: InputSignal<Item> = input.required<Item>();
  addToCart = output<Item>();
  viewBookDetails = output<number>();

  add(item: Item): void {
    this.addToCart.emit(item);
  }

  details(itemId: number): void {
    this.viewBookDetails.emit(itemId)
  }
}
