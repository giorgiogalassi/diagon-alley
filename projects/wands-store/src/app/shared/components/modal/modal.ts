import { CommonModule } from "@angular/common"; 
import { Component, input, InputSignal, output, OutputEmitterRef } from "@angular/core";

@Component({
  selector: "app-unauthenticated-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./modal.html",
  styleUrls: ["./modal.scss"]
})
export class UnauthenticatedModalComponent {
  imageUrl: InputSignal<string> = input.required<string>();
  message: InputSignal<string> = input.required<string>();

  closeModal: OutputEmitterRef<void> = output<void>();

  constructor() {}

  /**
   * Emits the closeModal event when the overlay or close button is clicked.
   */
  onClose(): void {
    this.closeModal.emit();
  }
}
