import { inject, Injectable } from "@angular/core";

import { CartService, Item, LoggerService } from "hp-library";

@Injectable()
export class BroomstickCartService extends CartService {
  // NOTE: skipSelf: true to avoid circular dependency injection
  #globalCart = inject(CartService, { skipSelf: true });
  #logger = inject(LoggerService);

  constructor() {
    super();

    this.#logger.prefix = "BroomstickCartService";
  }

  override add(itemToAdd: Item): void {
    const discounted: Item = { ...itemToAdd, price: itemToAdd.price - 10 };

    this.#globalCart.add(discounted);
  }
}
