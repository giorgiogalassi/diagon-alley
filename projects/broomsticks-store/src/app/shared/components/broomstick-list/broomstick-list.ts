import { Component, inject, Signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { CartService, Item, ListComponent } from "hp-library";

import { Broomstick, BroomstickService } from "../../services/broomstick";

@Component({
  selector: "app-broomstick-list",
  imports: [ListComponent],
  providers: [BroomstickService],
  template: `<app-list [allItems]="allBroomsticks()" (addItem)="addBroomstickToCart($event)" (goToDetail)="viewBroomstickDetails($event)"></app-list>`
})
export default class BroomstickListComponent {
  #broomstick = inject(BroomstickService, { self: true });
  #cart = inject(CartService);

  #router = inject(Router);
  #route = inject(ActivatedRoute);

  // Raw list of all books from the service
  allBroomsticks: Signal<Broomstick[]> = this.#broomstick.getAllBroomsticks();

  addBroomstickToCart(book: Item): void {
    this.#cart.add(book);
  }

  viewBroomstickDetails(broomstickId: number): void {
    this.#router.navigate(["./", broomstickId], { relativeTo: this.#route });
  }
}
