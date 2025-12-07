import { inject, Injectable } from "@angular/core";

import { CartService, LoggerService } from "hp-library";

@Injectable()
export class WandCartService extends CartService {
  #logger = inject(LoggerService);

  override add(): void {
    this.#logger.log("The wand chooses the wizard, Mr. Dev.");
  }
}
