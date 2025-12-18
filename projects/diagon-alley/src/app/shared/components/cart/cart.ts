import { Component, inject } from "@angular/core";
import { CartComponent, CartService, Item } from "hp-library";

@Component({
  selector: "app-display-cart",
  imports: [CartComponent],
  template: `<app-cart 
      [cartItems]="cart().items" 
      [cartTotal]="cart().totalPrice" 
      (doAdd)="add($event)" 
      (doDecrement)="decrement($event)" 
      (doRemove)="remove($event)">
  </app-cart>`
})
export class CartDisplayComponent {
  #cartService = inject(CartService);

  get cart() {
    return this.#cartService.cart;
  }

  add(item: Item): void {
    this.#cartService.add(item);
  }

  decrement(item: Item): void {
    this.#cartService.decrement(item);
  }

  remove(item: Item): void {
    this.#cartService.remove(item);
  }
}
