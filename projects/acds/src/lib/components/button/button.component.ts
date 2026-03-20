import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "acds-button",
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60"
      [ngClass]="variantClasses"
      [attr.type]="type"
      [disabled]="disabled || loading"
      (click)="handleClick()"
    >
      <span
        *ngIf="loading"
        class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        aria-hidden="true"
      ></span>
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsButtonComponent {
  @Input() variant: "primary" | "secondary" | "ghost" | "danger" = "primary";
  @Input() size: "sm" | "md" | "lg" = "md";
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input() disabled = false;
  @Input() loading = false;
  @Input() block = false;
  @Output() pressed = new EventEmitter<void>();

  get variantClasses(): string {
    const base = [
      "shadow-sm",
      "focus-visible:outline-none",
      "focus-visible:ring-2",
      "focus-visible:ring-accent",
      "cursor-pointer",
    ];
    if (this.block) base.push("w-full");
    if (this.size === "sm") base.push("text-xs", "px-3", "py-1.5");
    if (this.size === "md") base.push("text-sm", "px-4", "py-2");
    if (this.size === "lg") base.push("text-base", "px-5", "py-3");

    if (this.variant === "primary") {
      base.push("bg-primary", "text-primary-foreground", "border-transparent", "hover:opacity-90");
    }
    if (this.variant === "secondary") {
      base.push("bg-bg", "text-fg", "border-border", "hover:bg-muted/10");
    }
    if (this.variant === "ghost") {
      base.push("bg-transparent", "text-fg", "border-transparent", "hover:bg-muted/10");
    }
    if (this.variant === "danger") {
      base.push("bg-danger", "text-danger-foreground", "border-transparent", "hover:opacity-90");
    }

    return base.join(" ");
  }

  handleClick(): void {
    if (this.disabled || this.loading) return;
    this.pressed.emit();
  }
}
