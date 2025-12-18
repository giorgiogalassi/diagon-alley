import { Component, inject, OnInit, signal, Signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CartService, DetailsComponent, Item } from "hp-library";
import { Broomstick, BroomstickService } from "../../services/broomstick";

@Component({
  selector: "app-broomstick-details",
  template: `<app-item-details [item]="broomstick()" (addToCart)="addBroomstickToCart($event)"></app-item-details>`,
  imports: [DetailsComponent]
})
export default class BroomstickDetailComponent implements OnInit {
  #route = inject(ActivatedRoute);
  #broomstick = inject(BroomstickService);
  #cart = inject(CartService);

  broomstick: Signal<Broomstick | undefined> = signal(undefined);

  ngOnInit(): void {
    const broomstickId = this.#route.snapshot.paramMap.get("id");
    if (broomstickId) {
      this.broomstick = this.#broomstick.getBroomstickById(Number(broomstickId));
    } else console.error("Broomstick ID not found in route parameters.");
  }

  addBroomstickToCart(wand: Item): void {
    this.#cart.add(wand);
  }
}
