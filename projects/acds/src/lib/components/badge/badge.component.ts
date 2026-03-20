import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "acds-badge",
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-xs font-medium" [ngClass]="classes">
      <ng-content></ng-content>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsBadgeComponent {
  @Input() tone: "neutral" | "primary" | "danger" | "accent" = "neutral";

  get classes(): string {
    if (this.tone === "primary") return "bg-primary/10 text-primary";
    if (this.tone === "danger") return "bg-danger/10 text-danger";
    if (this.tone === "accent") return "bg-accent/20 text-accent-foreground";
    return "bg-muted/10 text-muted";
  }
}
