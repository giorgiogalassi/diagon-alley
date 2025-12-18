import { Inject, Injectable, signal } from "@angular/core";

@Injectable()
export class ModalService {
  #status = signal<boolean>(false);

  set status(value: boolean) {
    this.#status.set(value);
  }

  getStatus() {
    return this.#status.asReadonly();
  }
}
