import { Component, inject, OnInit, signal, Signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CartService, DetailsComponent, Item } from "hp-library";
import { Book, BookService } from "../../services/book";

@Component({
  selector: "app-book-details",
  template: `<app-item-details [item]="book()"  (addToCart)="addBookToCart($event)"></app-item-details>`,
  imports: [DetailsComponent]
})
export default class BookDetailComponent implements OnInit {
  #route = inject(ActivatedRoute);
  #book = inject(BookService);
  #cart = inject(CartService);

  book: Signal<Book | undefined> = signal(undefined);

  ngOnInit(): void {
    const bookId = this.#route.snapshot.paramMap.get("id");
    if (bookId) this.book = this.#book.getBookById(Number(bookId));
    else console.error("Book ID not found in route parameters.");
  }

  addBookToCart(wand: Item): void {
    this.#cart.add(wand);
  }
}
