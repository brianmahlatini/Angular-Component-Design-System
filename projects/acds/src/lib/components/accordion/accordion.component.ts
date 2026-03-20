import { ChangeDetectionStrategy, Component, ContentChildren, QueryList } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AcdsAccordionItemComponent } from "./accordion-item.component";

@Component({
  selector: "acds-accordion",
  standalone: true,
  imports: [CommonModule, AcdsAccordionItemComponent],
  template: `
    <div class="space-y-2">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsAccordionComponent {
  @ContentChildren(AcdsAccordionItemComponent) items!: QueryList<AcdsAccordionItemComponent>;
}
