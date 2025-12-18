import { Injectable, signal, computed, WritableSignal, Signal } from "@angular/core";
import { Item } from "hp-library";

export type Broomstick = Item & { type: "broomstick" };

@Injectable({ providedIn: "root" })
export class BroomstickService {
  #broomsticks$: WritableSignal<Broomstick[]> = signal<Broomstick[]>([
    {
      type: "broomstick",
      itemId: 8,
      name: "Nimbus 2000",
      author: "Nimbus Racing Broom Company",
      description:
        "A sleek and fast broomstick ideal for Quidditch players. Known for its superb handling and balance.",
      coverImage: "assets/images/brooms/nimbus_2000.png",
      category: "Flying Broomstick",
      price: 299.99,
      rating: 5,
      quantity: 0
    },
    {
      type: "broomstick",
      itemId: 9,
      name: "Nimbus 2001",
      author: "Nimbus Racing Broom Company",
      description:
        "An upgraded model of the Nimbus 2000, offering greater speed and improved aerodynamics.",
      coverImage: "assets/images/brooms/nimbus_2001.png",
      category: "Flying Broomstick",
      price: 349.99,
      rating: 4,
      quantity: 0
    },
    {
      type: "broomstick",
      itemId: 10,
      name: "Firebolt",
      author: "Randolph Spudmore",
      description:
        "The fastest broomstick in the world. Built with precision for professional Quidditch use and top-tier performance.",
      coverImage: "assets/images/brooms/firebolt.png",
      category: "Flying Broomstick",
      price: 499.0,
      rating: 5,
      quantity: 0
    },
    {
      type: "broomstick",
      itemId: 11,
      name: "Comet 260",
      author: "Comet Trading Company",
      description:
        "A reliable broomstick for beginners and casual flyers. Balanced speed and easy maneuverability.",
      coverImage: "assets/images/brooms/comet_260.png",
      category: "Flying Broomstick",
      price: 179.5,
      rating: 3,
      quantity: 0
    },
    {
      type: "broomstick",
      itemId: 12,
      name: "Cleansweep Seven",
      author: "Cleansweep Broom Company",
      description:
        "Popular among Hogwarts students. Provides smooth flight and reasonable speed for school-level Quidditch.",
      coverImage: "assets/images/brooms/cleansweep_seven.png",
      category: "Flying Broomstick",
      price: 219.0,
      rating: 4,
      quantity: 0
    },
    {
      type: "broomstick",
      itemId: 13,
      name: "Silver Arrow",
      author: "Leonard Jewkes",
      description:
        "A vintage broomstick known for its elegance and high craftsmanship. Collectors and enthusiasts appreciate its legacy.",
      coverImage: "assets/images/brooms/silver_arrow.png",
      category: "Flying Broomstick",
      price: 399.0,
      rating: 4,
      quantity: 0
    },
    {
      type: "broomstick",
      itemId: 14,
      name: "Moontrimmer",
      author: "Gladys Boothby",
      description:
        "Slim, silver, and built for altitude. Once considered state-of-the-art, now a nostalgic favorite.",
      coverImage: "assets/images/brooms/moontrimmer.png",
      category: "Flying Broomstick",
      price: 259.99,
      rating: 3,
      quantity: 0
    }
  ]);

  getAllBroomsticks(): Signal<Broomstick[]> {
    return this.#broomsticks$.asReadonly();
  }

  getBroomstickById(id: number): Signal<Broomstick | undefined> {
    return computed(() => this.#broomsticks$().find((broomstick) => broomstick.itemId === id));
  }
}
