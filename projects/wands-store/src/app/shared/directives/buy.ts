import { Directive, HostListener, inject } from "@angular/core";
import { CartService } from "hp-library";

import { OlivanderService } from "../components/details/olivander";

@Directive({
  selector: "[hpBuy]"
})
export class BuyDirective {
  #cartService = inject(CartService, { host: true }) as OlivanderService;

  @HostListener("addItem")
  addItem(): void {
    this.#cartService.add();
  }

  @HostListener("addToCart")
  addToCart(): void {
    this.#cartService.add();
  }

  @HostListener("doClick")
  doClick(): void {
    this.#cartService.add();
  }
}
