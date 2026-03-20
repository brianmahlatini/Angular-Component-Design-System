import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "acds-tooltip-panel",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-md bg-fg px-3 py-2 text-xs text-bg shadow-md" role="tooltip">
      {{ text }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsTooltipPanelComponent {
  @Input() text = "";
}
