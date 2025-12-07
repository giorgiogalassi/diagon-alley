import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LoggerService {
  #prefix: string = "LoggerService - root";

  set prefix(newPrefix: string) {
    this.#prefix = newPrefix;
  }

  log(message: string): void {
    console.log(`!! ${this.#prefix} !!`);
    console.log(message);
  }
}
