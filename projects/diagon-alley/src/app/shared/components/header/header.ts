import { Component, effect, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

import { CartService } from "hp-library";

@Component({
  selector: "app-header",
  imports: [RouterLink, RouterLinkActive], // Added RouterLink and RouterLinkActive
  templateUrl: "./header.html",
  styleUrl: "./header.scss"
})
export class HeaderComponent {
  cart = inject(CartService);
}
