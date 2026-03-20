import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "acds-pagination",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-2 text-sm">
      <button class="rounded-md border border-border px-3 py-1" (click)="goTo(page - 1)" [disabled]="page <= 1">
        Prev
      </button>
      <span class="text-muted">Page {{ page }} of {{ totalPages }}</span>
      <button
        class="rounded-md border border-border px-3 py-1"
        (click)="goTo(page + 1)"
        [disabled]="page >= totalPages"
      >
        Next
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsPaginationComponent {
  @Input() page = 1;
  @Input() pageSize = 10;
  @Input() total = 0;
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }

  goTo(next: number): void {
    const target = Math.min(Math.max(next, 1), this.totalPages);
    if (target !== this.page) {
      this.page = target;
      this.pageChange.emit(this.page);
    }
  }
}
