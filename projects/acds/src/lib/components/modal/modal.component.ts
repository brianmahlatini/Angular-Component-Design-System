import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { A11yModule } from "@angular/cdk/a11y";

@Component({
  selector: "acds-modal",
  standalone: true,
  imports: [CommonModule, A11yModule],
  template: `
    <div *ngIf="open" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/40" (click)="close()" aria-hidden="true"></div>
      <div
        class="relative z-10 w-full max-w-lg rounded-lg border border-border bg-bg p-6 shadow-lg"
        role="dialog"
        aria-modal="true"
        cdkTrapFocus
      >
        <div class="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 class="text-lg font-semibold" *ngIf="title">{{ title }}</h2>
            <p class="text-sm text-muted" *ngIf="subtitle">{{ subtitle }}</p>
          </div>
          <button type="button" class="text-muted hover:text-fg" (click)="close()">✕</button>
        </div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsModalComponent {
  @Input() open = false;
  @Input() title = "";
  @Input() subtitle = "";
  @Output() openChange = new EventEmitter<boolean>();

  @HostListener("document:keydown.escape")
  onEscape(): void {
    if (this.open) {
      this.close();
    }
  }

  close(): void {
    this.open = false;
    this.openChange.emit(false);
  }
}
