import { computed, inject, Injectable, signal } from "@angular/core";
import { LoggerService } from "./logger.service";

export type Item = {
  type: string;
  author: string;
  quantity: number;
  category: string;
  coverImage: string;
  description: string;
  itemId: number;
  name: string;
  price: number;
  rating: number;
};

export type Cart = { items: Item[]; totalPrice: number };

@Injectable({ providedIn: "root" })
export class CartService {
  #logger = inject(LoggerService);
  #cart = signal<Cart>({ items: [], totalPrice: 0 });
  #cartCount = computed(() => this.#cart().items.reduce((acc, item) => acc + item.quantity, 0));

  get cart() {
    return this.#cart.asReadonly();
  }

  get cartCount() {
    return this.#cartCount;
  }

  constructor() {
    this.#logger.prefix = "CartService - root";
  }

  add(itemToAdd: Item): void {
    this.#logger.log("Adding Item!");

    this.#cart.update(({ items, totalPrice }) => {
      const item = items.find(({ itemId: id }) => id === itemToAdd.itemId);

      if (!item) {
        const addedItem = { ...itemToAdd, quantity: itemToAdd.quantity + 1 };

        return {
          items: [...items, addedItem],
          totalPrice: Number((totalPrice + addedItem.price * addedItem.quantity).toFixed(2))
        };
      }

      item.quantity++;

      return {
        items,
        totalPrice: Number((totalPrice + itemToAdd.price).toFixed(2))
      };
    });
  }

  setCart(cart: Cart): void {
    this.#cart.set({ ...cart });
  }

  addItems(items: Item[]): void {
    items.forEach((item) => this.add(item));
  }

  getById(itemId: number): Item | undefined {
    return this.#cart().items.find((item) => item.itemId === itemId);
  }

  empty(): void {
    this.#cart.set({ items: [], totalPrice: 0 });
  }

  decrement(itemToDecrement: Item): void {
    this.#logger.log("Decrementing Item!");
    
    this.#cart.update(({ items, totalPrice }) => {
      const index = items.findIndex(({ itemId }) => itemId === itemToDecrement.itemId);

      if (index === -1) {
        return {
          items,
          totalPrice
        };
      }

      const item = items[index];
      const { price } = item;

      if (item.quantity > 0) item.quantity--;
      if (item.quantity === 0) items.splice(index, 1);

      return {
        items,
        totalPrice: totalPrice - price
      };
    });
  }

  remove(itemToRemove: Item): void {
    this.#cart.update(({ items, totalPrice }) => {
      const index = items.findIndex(({ itemId }) => itemId === itemToRemove.itemId);

      if (index === -1) {
        return {
          items,
          totalPrice
        };
      }

      const { price, quantity } = items[index];
      items.splice(index, 1);

      return {
        items,
        totalPrice: totalPrice - price * quantity
      };
    });
  }

  removeItems(items: Item[]): void {
    items.forEach((item) => this.remove(item));
  }
}
