import { computed, Injectable, signal, Signal, WritableSignal } from "@angular/core";
import { Item } from "hp-library";

export type Book = Item & { type: "book" };

@Injectable({ providedIn: "root" })
export class BookService {
  #books$: WritableSignal<Book[]> = signal<Book[]>([
    {
      type: "book",
      itemId: 1,
      name: "Magical Drafts and Potions",
      author: "Arsenius Jigger",
      description:
        "A classic textbook on potion-making, required for first-year Hogwarts students. Covers basic to intermediate potions.",
      coverImage: "assets/images/covers/magical_drafts_and_potions.png",
      category: "Potions",
      price: 12.99,
      rating: 4,
      quantity: 0
    },
    {
      type: "book",
      itemId: 2,
      name: "A History of Magic",
      author: "Bathilda Bagshot",
      description:
        "A comprehensive account of the history of the wizarding world, from ancient times to the modern era.",
      coverImage: "assets/images/covers/a_history_of_magic.png",
      category: "History",
      price: 15.5,
      rating: 5,
      quantity: 0
    },
    {
      type: "book",
      itemId: 3,
      name: "The Standard Book of Spells, Grade 1",
      author: "Miranda Goshawk",
      description:
        "Contains all the essential spells and charms for first-year students. Easy to follow instructions and diagrams.",
      coverImage: "assets/images/covers/standard_book_of_spells_grade_1.png",
      category: "Charms",
      price: 10.75,
      rating: 4,
      quantity: 0
    },
    {
      type: "book",
      itemId: 4,
      name: "Fantastic Beasts and Where to Find Them",
      author: "Newt Scamander",
      description:
        "An indispensable guide to the magical creatures of the wizarding world. Full of fascinating facts and illustrations.",
      coverImage: "assets/images/covers/fantastic_beasts.png",
      category: "Magizoology",
      price: 18.0,
      rating: 5,
      quantity: 0
    },
    {
      type: "book",
      itemId: 5,
      name: "Advanced Potion-Making",
      author: "Libatius Borage",
      description:
        "The N.E.W.T. level textbook filled with complex potions. Famously annotated by the Half-Blood Prince.",
      coverImage: "assets/images/covers/advanced_potion_making.png",
      category: "Potions",
      price: 25.0,
      rating: 5,
      quantity: 0
    },
    {
      type: "book",
      itemId: 6,
      name: "Defensive Magical Theory",
      author: "Wilbert Slinkhard",
      description:
        "A theoretical approach to defensive magic, criticized for its lack of practical application by some.",
      coverImage: "assets/images/covers/defensive_magical_theory.png",
      category: "Dark Arts Defence",
      price: 14.25,
      rating: 3,
      quantity: 0
    },
    {
      type: "book",
      itemId: 7,
      name: "Unfogging the Future",
      author: "Cassandra Vablatsky",
      description:
        "A beginner's guide to Divination, covering tea leaves, crystal balls, and dream interpretation.",
      coverImage: "assets/images/covers/unfogging_the_future.png",
      category: "Divination",
      price: 9.99,
      rating: 2,
      quantity: 0
    }
  ]);

  getAllBooks(): Signal<Book[]> {
    return this.#books$.asReadonly();
  }

  getBookById(id: number): Signal<Book | undefined> {
    return computed(() => this.#books$().find((book) => book.itemId === id));
  }
}
