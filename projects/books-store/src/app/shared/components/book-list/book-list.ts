import { Component, inject, Signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { CartService, Item, ListComponent, LoggerService } from "hp-library";

import { Book, BookService } from "../../services/book";

@Component({
  selector: "app-book-list",
  imports: [ListComponent],
  providers: [BookService, LoggerService],
  template: `<app-list [allItems]="allBooks()" (addItem)="addBookToCart($event)" (goToDetail)="viewBookDetails($event)"></app-list>`
})
export default class BookListComponent {
  #book = inject(BookService, { self: true });

  // -------------------------------
  // Cart
  // -------------------------------
  #cart = inject(CartService);

  #logger = inject(LoggerService);

  #router = inject(Router);
  #route = inject(ActivatedRoute);

  // Raw list of all books from the service
  allBooks: Signal<Book[]> = this.#book.getAllBooks();

  constructor() {
    // We will see two different logs
    // 1️⃣ Using the updated prefix
    // 2️⃣ Using the default prefix
    // This is because we have the CartService declared in the providers[]
    // And we are forcing the DI to this instance using { self: true }
    this.#logger.prefix = "BookListComponent - constructor";
  }

  addBookToCart(book: Item): void {
    this.#cart.add(book);
  }

  viewBookDetails(bookId: number): void {
    this.#router.navigate(["./", bookId], { relativeTo: this.#route });
  }
}
