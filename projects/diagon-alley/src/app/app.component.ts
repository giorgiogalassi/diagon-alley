import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./shared/components/header/header";
import { FooterComponent } from "./shared/components/footer/footer";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "diagon-alley";
}
