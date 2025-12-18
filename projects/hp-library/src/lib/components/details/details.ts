import { Component, input, output } from "@angular/core";
import { RouterLink } from "@angular/router"; 

import { CommonModule } from "@angular/common";
import { Item } from "../../cart.service";

@Component({
  selector: "app-item-details",
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: "./details.html",
  styleUrls: ["./details.scss"] 
})
export class DetailsComponent {
  // Initialize book signal with undefined, or null if preferred
  item = input<Item | undefined>(undefined);
  addToCart = output<Item>();

  addItemToCart(item: Item): void {
    this.addToCart.emit(item);
  }
}
