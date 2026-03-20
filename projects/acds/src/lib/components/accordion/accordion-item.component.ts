import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "acds-accordion-item",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-md border border-border bg-bg">
      <button
        type="button"
        class="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium"
        (click)="toggle()"
        [attr.aria-expanded]="open"
      >
        <span>{{ title }}</span>
        <span class="text-muted">{{ open ? '−' : '+' }}</span>
      </button>
      <div *ngIf="open" class="border-t border-border px-4 py-3 text-sm text-muted">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsAccordionItemComponent {
  @Input() title = "";
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  toggle(): void {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }
}
