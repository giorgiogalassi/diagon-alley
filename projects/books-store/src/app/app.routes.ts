import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "books", pathMatch: "full" },
  { path: "books", loadComponent: () => import("./shared/components/book-list/book-list") },
  { path: "books/:id", loadComponent: () => import("./shared/components/book-detail/book-detail") },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
