import { Component, inject, Signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { CartService, Item, ListComponent, LoggerService } from "hp-library";

import { Wand, WandService } from "../../services/wand";
import { WandCartService } from "../../services/wand-cart";

@Component({
  selector: "app-broomstick-list",
  imports: [ListComponent],
  providers: [LoggerService],
  template: `<app-list [allItems]="allWands()" (addItem)="addWandToCart()" (goToDetail)="viewWandDetails($event)"></app-list>`
})
export default class WandListComponent {
  #wand = inject(WandService);
  #cart = inject(CartService);
  #logger = inject(LoggerService);

  #router = inject(Router);
  #route = inject(ActivatedRoute);

  // Raw list of all books from the service
  allWands: Signal<Wand[]> = this.#wand.getAllWands();

  constructor() {
    // We will see the default prefix if no CartService is provided in the providers[]
    this.#logger.prefix = "WandListComponent - constructor";
  }

  addWandToCart(): void {
    (this.#cart as WandCartService).add();
  }

  viewWandDetails(wandId: number): void {
    this.#router.navigate(["./", wandId], { relativeTo: this.#route });
  }
}
