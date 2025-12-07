import { Component, computed, input, output, signal, Signal, WritableSignal } from "@angular/core";

import { Item } from "../../cart.service";
import { CardComponent } from "../card/card";

@Component({
  selector: "app-list",
  imports: [CardComponent],
  templateUrl: "./list.html",
  styleUrl: "./list.scss"
})
export class ListComponent {
  allItems = input.required<Item[]>();

  addItem = output<Item>();
  goToDetail = output<number>();

  // Signals for filtering
  searchTerm: WritableSignal<string> = signal("");
  selectedCategory: WritableSignal<string> = signal(""); // Stores the category string, e.g., "Potions" or "" for all

  // Derived signal for unique categories to populate the dropdown
  categories: Signal<string[]> = computed(() => {
    const items = this.allItems();
    const uniqueCategories = [...new Set(items.map((item) => item.category))];

    return ["All Categories", ...uniqueCategories.sort()]; // Add "All Categories" option and sort
  });

  // Derived signal for the filtered list of books to display
  filteredItems: Signal<Item[]> = computed(() => {
    const items = this.allItems();
    const term = this.searchTerm().toLowerCase();
    const category = this.selectedCategory();

    let filtered = items;

    // Filter by search term
    if (term) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.author.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term)
      );
    }

    // Filter by selected category
    if (category && category !== "All Categories") {
      // Ensure "All Categories" or empty string doesn't filter
      filtered = filtered.filter((item) => item.category === category);
    }

    return filtered;
  });

  // Event handler for search input
  onSearch(event: Event): void {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  // Event handler for category select change
  onFilterCategory(event: Event): void {
    this.selectedCategory.set((event.target as HTMLSelectElement).value);
  }

  addItemToCart(item: Item): void {
    this.addItem.emit(item);
  }

  viewItemDetails(itemId: number): void {
    this.goToDetail.emit(itemId);
  }
}
