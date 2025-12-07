import { Component, inject, OnInit, signal, Signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ButtonComponent } from "hp-library";

import { BuyDirective } from "../../directives/buy";
import { Wand, WandService } from "../../services/wand";
import { DetailsComponent } from "../details/details";
import { ModalService } from "../modal/modal.service";

@Component({
  selector: "app-wand-details",
  template: `
  <app-item-details [item]="wand()">
    <app-button hpBuy></app-button>
  </app-item-details>`,
  imports: [DetailsComponent, BuyDirective, ButtonComponent],
  providers: [ModalService]
})
export default class WandDetailsComponent implements OnInit {
  #route = inject(ActivatedRoute);
  #wandService = inject(WandService);

  wand: Signal<Wand | undefined> = signal(undefined);

  ngOnInit(): void {
    const wandId = this.#route.snapshot.paramMap.get("id");
    if (wandId) {
      this.wand = this.#wandService.getWandById(Number(wandId));
      this.#wandService.currentWand = this.wand() as Wand;
    } else console.error("Wand ID not found in route parameters.");
  }
}
