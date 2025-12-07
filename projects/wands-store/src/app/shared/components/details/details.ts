import { Component, inject, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CommonModule } from "@angular/common";

import { CartService, Item } from "hp-library";
import { UnauthenticatedModalComponent } from "../modal/modal";
import { OlivanderService } from "./olivander";
import { ModalService } from "../modal/modal.service";

@Component({
  selector: "app-item-details",
  imports: [CommonModule, RouterLink, UnauthenticatedModalComponent],
  providers: [{ provide: CartService, useClass: OlivanderService }],
  templateUrl: "./details.html",
  styleUrls: ["./details.scss"]
})
export class DetailsComponent {
  item = input<Item | undefined>(undefined);

  #cart = inject(CartService) as OlivanderService;
  #modal = inject(ModalService);

  modalStatus = this.#modal.getStatus();

  addItemToCart(): void {
    this.#cart.add();
  }

  handleCloseModal(): void {
    this.#modal.status = false;
  }
}
