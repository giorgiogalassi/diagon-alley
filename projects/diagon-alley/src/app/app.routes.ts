import { loadRemoteModule } from "@angular-architects/native-federation";
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "books-store",
    pathMatch: "full"
  },
  {
    path: "books-store",
    loadChildren: () => loadRemoteModule("books-store", "./routes").then((m) => m.routes)
  },
  {
    path: "broomsticks-store",
    loadChildren: () => loadRemoteModule("broomsticks-store", "./routes").then((m) => m.routes)
  },
  {
    path: "wands-store",
    loadChildren: () => loadRemoteModule("wands-store", "./routes").then((m) => m.routes)
  },
  {
    path: "cart",
    loadComponent: () => import("./shared/components/cart/cart").then((m) => m.CartDisplayComponent)
  }
];
