import { inject, Injectable } from "@angular/core";
import { CartService } from "hp-library";
import { ModalService } from "../modal/modal.service";

@Injectable()
export class OlivanderService extends CartService {
  #modalService = inject(ModalService);

  override add(): void {
    this.#modalService.status = true;
  }
}
