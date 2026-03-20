import { ChangeDetectionStrategy, Component, Input, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "acds-popover-panel",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-w-[220px] rounded-lg border border-border bg-bg p-4 text-sm shadow-lg">
      <div *ngIf="title" class="mb-2 font-medium text-fg">{{ title }}</div>
      <ng-container *ngIf="template; else textBlock">
        <ng-container *ngTemplateOutlet="template"></ng-container>
      </ng-container>
      <ng-template #textBlock>
        <div class="text-muted">{{ text }}</div>
      </ng-template>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsPopoverPanelComponent {
  @Input() title = "";
  @Input() text = "";
  @Input() template?: TemplateRef<unknown>;
}
