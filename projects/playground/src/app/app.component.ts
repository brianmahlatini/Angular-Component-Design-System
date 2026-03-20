import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AcdsAccordionComponent,
  AcdsAccordionItemComponent,
  AcdsBadgeComponent,
  AcdsButtonComponent,
  AcdsDataTableComponent,
  AcdsDrawerComponent,
  AcdsInputComponent,
  AcdsModalComponent,
  AcdsPaginationComponent,
  AcdsTabPanelComponent,
  AcdsTabsComponent,
  AcdsTreeViewComponent,
  AcdsTableColumn,
} from "acds";
import { OverlayModule } from "@angular/cdk/overlay";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    AcdsButtonComponent,
    AcdsBadgeComponent,
    AcdsTabsComponent,
    AcdsTabPanelComponent,
    AcdsAccordionComponent,
    AcdsAccordionItemComponent,
    AcdsInputComponent,
    AcdsDataTableComponent,
    AcdsPaginationComponent,
    AcdsTreeViewComponent,
    AcdsModalComponent,
    AcdsDrawerComponent,
    OverlayModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  activeTab = "overview";
  showModal = false;
  showDrawer = false;
  lastAction = "None yet";

  tableColumns: AcdsTableColumn<{ name: string; role: string }>[] = [
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
  ];
  tableRows = [
    { name: "Ayo Harper", role: "Designer" },
    { name: "Mika Stone", role: "Engineer" },
  ];

  treeNodes = [
    {
      id: "1",
      label: "Design System",
      children: [
        { id: "1-1", label: "Tokens" },
        { id: "1-2", label: "Components" },
      ],
    },
    {
      id: "2",
      label: "Engineering",
      children: [{ id: "2-1", label: "Architecture" }],
    },
  ];

  handleAction(label: string): void {
    this.lastAction = label;
  }
}
