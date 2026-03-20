import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AcdsTabPanelComponent } from "./tab-panel.component";

@Component({
  selector: "acds-tabs",
  standalone: true,
  imports: [CommonModule, AcdsTabPanelComponent],
  template: `
    <div class="flex items-center gap-2 border-b border-border pb-2" role="tablist">
      <button
        *ngFor="let tab of panels"
        type="button"
        class="rounded-md px-3 py-1.5 text-sm font-medium transition"
        [ngClass]="tab.tabId === activeId ? 'bg-primary text-primary-foreground' : 'text-muted hover:text-fg'"
        (click)="select(tab.tabId)"
        [attr.aria-selected]="tab.tabId === activeId"
        role="tab"
      >
        {{ tab.label }}
      </button>
    </div>
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsTabsComponent implements AfterContentInit {
  @ContentChildren(AcdsTabPanelComponent) panels: QueryList<AcdsTabPanelComponent> = new QueryList<AcdsTabPanelComponent>();
  @Input() activeId = "";
  @Output() activeIdChange = new EventEmitter<string>();

  ngAfterContentInit(): void {
    if (!this.activeId && this.panels.length > 0) {
      this.select(this.panels.first.tabId);
    }
    this.panels.forEach((panel) => (panel.activeId = this.activeId));
  }

  select(id: string): void {
    this.activeId = id;
    this.panels.forEach((panel) => (panel.activeId = id));
    this.activeIdChange.emit(id);
  }
}
