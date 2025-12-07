import { inject, Injectable, signal } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({ providedIn: "platform" })
export class AuthService {
  #loggerService = inject(LoggerService);
  #isAuthenticated = signal<boolean>(false);

  get isAuthenticated() {
    return this.#isAuthenticated.asReadonly();
  }

  constructor() {
    this.#loggerService.prefix = "AuthService - root";
  }

  login(): void {
    this.#loggerService.log("Logging in...");
    this.#isAuthenticated.set(true);
  }

  logout(): void {
    this.#loggerService.log("Logging out...");
    this.#isAuthenticated.set(false);
  }
}
