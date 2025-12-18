import { Component, output } from "@angular/core";

@Component({
  selector: "app-button",
  template: `
    <button type="button" (click)="doClick.emit()">
        Add to Cart
    </button>`,
  styles: `
    button {
        background-color: var(--midnight-blue, #1A237E);
        color: var(--parchment-beige, #F5EFCF);
        border: none;
        padding: 12px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-family: 'Georgia', 'Times New Roman', serif;
        font-weight: bold;
        font-size: 1.1em;
        transition: background-color 0.3s ease;
        margin-top: 15px;

        &::before {
            content: "🪄 ";
            margin-right: 5px;
        }

        &:hover {
            background-color: var(--midnight-blue-darker, #141B60);
        }
    }`
})
export class ButtonComponent {
  doClick = output<void>();
}
