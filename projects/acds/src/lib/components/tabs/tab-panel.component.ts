import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "acds-tab-panel",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section *ngIf="activeId === tabId" class="pt-4" role="tabpanel">
      <ng-content></ng-content>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsTabPanelComponent {
  @Input() tabId = "";
  @Input() label = "";
  activeId = "";
}
