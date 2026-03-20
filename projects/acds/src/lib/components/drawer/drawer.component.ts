import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { A11yModule } from "@angular/cdk/a11y";

@Component({
  selector: "acds-drawer",
  standalone: true,
  imports: [CommonModule, A11yModule],
  template: `
    <div *ngIf="open" class="fixed inset-0 z-40">
      <div class="absolute inset-0 bg-black/40" (click)="close()" aria-hidden="true"></div>
      <aside
        class="absolute top-0 h-full w-full max-w-md bg-bg shadow-lg"
        [ngClass]="side === 'right' ? 'right-0' : 'left-0'"
        role="dialog"
        aria-modal="true"
        cdkTrapFocus
      >
        <div class="flex items-start justify-between border-b border-border p-4">
          <div>
            <h2 class="text-lg font-semibold" *ngIf="title">{{ title }}</h2>
            <p class="text-sm text-muted" *ngIf="subtitle">{{ subtitle }}</p>
          </div>
          <button type="button" class="text-muted hover:text-fg" (click)="close()">✕</button>
        </div>
        <div class="p-4">
          <ng-content></ng-content>
        </div>
      </aside>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsDrawerComponent {
  @Input() open = false;
  @Input() side: "left" | "right" = "right";
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
