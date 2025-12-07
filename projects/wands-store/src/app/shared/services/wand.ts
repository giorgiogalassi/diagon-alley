import { Injectable, signal, computed, WritableSignal, Signal } from "@angular/core";
import { Item } from "hp-library";

export type Wand = Item & { type: "wand" };

@Injectable({ providedIn: "root" })
export class WandService {
  #currentWand: Wand | undefined = undefined;

  set currentWand(wand: Wand) {
    this.#currentWand = wand;
  }

  get urrentWand() {
    return this.#currentWand;
  }

  #wands$: WritableSignal<Wand[]> = signal<Wand[]>([
    {
      type: "wand",
      itemId: 15,
      name: "Elder Wand",
      author: "Antioch Peverell",
      description:
        "The most powerful wand ever created. Crafted from elder wood with a Thestral tail hair core. A legendary artifact of immense magical power.",
      coverImage: "assets/images/wands/elder_wand.png",
      category: "Wand",
      price: 999.99,
      rating: 5,
      quantity: 0
    },
    {
      type: "wand",
      itemId: 16,
      name: "Harry Potter's Wand",
      author: "Garrick Ollivander",
      description:
        "Made of holly with a phoenix feather core. A unique and loyal wand, best suited for brave-hearted witches and wizards.",
      coverImage: "assets/images/wands/harry_potter_wand.png",
      category: "Wand",
      price: 249.0,
      rating: 5,
      quantity: 0
    },
    {
      type: "wand",
      itemId: 17,
      name: "Hermione Granger's Wand",
      author: "Garrick Ollivander",
      description:
        "Crafted from vine wood with a dragon heartstring core. Precise, elegant, and perfectly attuned for intelligent spellwork.",
      coverImage: "assets/images/wands/hermione_wand.png",
      category: "Wand",
      price: 219.5,
      rating: 5,
      quantity: 0
    },
    {
      type: "wand",
      itemId: 18,
      name: "Ron Weasley's Wand",
      author: "Garrick Ollivander",
      description:
        "Made of willow with a unicorn hair core. Reliable and steadfast, great for general magic and everyday use.",
      coverImage: "assets/images/wands/ron_weasley_wand.png",
      category: "Wand",
      price: 189.0,
      rating: 4,
      quantity: 0
    },
    {
      type: "wand",
      itemId: 19,
      name: "Draco Malfoy's Wand",
      author: "Garrick Ollivander",
      description:
        "Hawthorn wood with a unicorn hair core. A wand that favors sharp reflexes and cunning users.",
      coverImage: "assets/images/wands/draco_malfoy_wand.png",
      category: "Wand",
      price: 209.0,
      rating: 4,
      quantity: 0
    },
    {
      type: "wand",
      itemId: 20,
      name: "Luna Lovegood's Wand",
      author: "Unknown",
      description:
        "Crafted from unknown wood and core. This unique wand mirrors Luna’s individuality and magical intuition.",
      coverImage: "assets/images/wands/luna_lovegood_wand.png",
      category: "Wand",
      price: 229.0,
      rating: 4,
      quantity: 0
    },
    {
      type: "wand",
      itemId: 21,
      name: "Professor McGonagall's Wand",
      author: "Garrick Ollivander",
      description:
        "Fir wood with a dragon heartstring core. Ideal for Transfiguration and strong-willed witches.",
      coverImage: "assets/images/wands/mcgonagall_wand.png",
      category: "Wand",
      price: 259.0,
      rating: 5,
      quantity: 0
    }
  ]);

  getAllWands(): Signal<Wand[]> {
    return this.#wands$.asReadonly();
  }

  getWandById(id: number): Signal<Wand | undefined> {
    return computed(() => this.#wands$().find((wand) => wand.itemId === id));
  }
}
