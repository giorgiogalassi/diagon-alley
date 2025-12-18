import { TestBed } from "@angular/core/testing";

import { CartService, Item } from "./cart.service";

const item: Item = {
  itemId: 0,
  name: "Item 1",
  price: 10,
  quantity: 0,
  author: "",
  category: "",
  coverImage: "",
  description: "",
  rating: 5,
  type: ""
};

describe("CartService", () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });

    service = TestBed.inject(CartService);

    // Default value of the cart is empty
    expect(service.cart().items.length).toBe(0);
    expect(service.cart().totalPrice).toBe(0);
  });

  it("should add one item", () => {
    service.add(item);

    expect(service.cart().items.length).toBe(1);
    expect(service.cart().totalPrice).toBe(10);
  });

  it("should add more than one item", () => {
    service.add(item);
    service.add(item);
    service.add(item);

    expect(service.cart().items.length).toBe(1);
    expect(service.getById(0)?.quantity).toBe(3);
    expect(service.cart().totalPrice).toBe(30);
  });

  it("should empty the cart", () => {
    service.empty();

    expect(service.cart().items.length).toBe(0);
    expect(service.cart().totalPrice).toBe(0);
  });

  describe("CartService - array functions", () => {
    beforeEach(() => {
      service.setCart({
        items: [
          { ...item, itemId: 0, name: "Item 1", price: 10, quantity: 1 },
          { ...item, itemId: 1, name: "Item 2", price: 15, quantity: 3 },
          { ...item, itemId: 2, name: "Item 3", price: 20, quantity: 2 }
        ],
        totalPrice: 95
      });
    });

    it("should add 3 items together", () => {
      expect(service.cart().items.length).toBe(3);
      expect(service.cart().totalPrice).toBe(95);
    });

    it("should remove item by itemId", () => {
      service.remove({ ...item, itemId: 1, name: "Item 2", price: 15, quantity: 3 });

      expect(service.cart().items.length).toBe(2);
      expect(service.cart().items.length).toBe(2);
      expect(service.cart().totalPrice).toBe(50);
    });

    it("should remove 2 items by itemId", () => {
      service.removeItems([
        { ...item, itemId: 0, name: "Item 1", price: 10, quantity: 1 },
        { ...item, itemId: 2, name: "Item 3", price: 20, quantity: 2 }
      ]);

      expect(service.cart().items.length).toBe(1);
      expect(service.cart().totalPrice).toBe(45);

      expect(service.getById(0)).toBe(undefined);
      expect(service.getById(2)).toBe(undefined);
    });
  });
});
