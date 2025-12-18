import { Routes } from "@angular/router";

import { CartService } from "hp-library";
import { WandCartService } from "./shared/services/wand-cart";

export const routes: Routes = [
  {
    path: "",
    providers: [{ provide: CartService, useClass: WandCartService }],
    children: [
      {
        path: "",
        redirectTo: "wands",
        pathMatch: "full"
      },
      { path: "wands", loadComponent: () => import("./shared/components/wand-list/wand-list") },
      {
        path: "wands/:id",
        loadComponent: () => import("./shared/components/wand-detail/wand-detail")
      },
      { path: "**", redirectTo: "", pathMatch: "full" }
    ]
  }
];
