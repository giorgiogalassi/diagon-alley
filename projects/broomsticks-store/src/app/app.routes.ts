import { Routes } from "@angular/router";
import { CartService } from "hp-library";

import { BroomstickCartService } from "./shared/services/broomstick-cart";

export const routes: Routes = [
  {
    path: "",
    providers: [{ provide: CartService, useClass: BroomstickCartService }],
    children: [
      {
        path: "",
        redirectTo: "broomsticks",
        pathMatch: "full"
      },
      {
        path: "broomsticks",
        loadComponent: () => import("./shared/components/broomstick-list/broomstick-list")
      },
      {
        path: "broomsticks/:id",
        loadComponent: () => import("./shared/components/broomstick-detail/broomstick-detail")
      },
      { path: "**", redirectTo: "", pathMatch: "full" }
    ]
  }
];
