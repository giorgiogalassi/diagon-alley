import { CommonModule, CurrencyPipe } from "@angular/common";
import { Component, computed, input, output } from "@angular/core";

import { Item } from "../../cart.service";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: "./cart.html",
  styleUrls: ["./cart.scss"]
})
export class CartComponent {
  cartItems = input<Item[]>([]);
  cartTotal = input<number>(0);

  cartItemsCount = computed(() => this.cartItems().reduce((acc, item) => acc + item.quantity, 0));

  doCheckout = output<void>();
  doClear = output<void>();

  doAdd = output<Item>();
  doDecrement = output<Item>();
  doRemove = output<Item>();

  add(item: Item): void {
    this.doAdd.emit(item);
  }

  decrement(item: Item): void {
    this.doDecrement.emit(item);
  }

  remove(item: Item): void {
    this.doRemove.emit(item);
  }

  checkout(): void {
    this.doCheckout.emit();
  }

  clearCart(): void {
    this.doClear.emit();
  }
}
