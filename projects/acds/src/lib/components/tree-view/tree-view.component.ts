import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

export type AcdsTreeNode = {
  id: string;
  label: string;
  children?: AcdsTreeNode[];
};

@Component({
  selector: "acds-tree-node",
  standalone: true,
  imports: [CommonModule],
  template: `
    <li class="space-y-1">
      <div class="flex items-center gap-2">
        <button
          *ngIf="hasChildren"
          type="button"
          class="text-xs text-muted"
          (click)="expanded = !expanded"
          [attr.aria-expanded]="expanded"
        >
          {{ expanded ? '▾' : '▸' }}
        </button>
        <span>{{ node.label }}</span>
      </div>
      <ul *ngIf="hasChildren && expanded" class="ml-4 space-y-1 border-l border-border pl-4">
        <acds-tree-node *ngFor="let child of node.children" [node]="child"></acds-tree-node>
      </ul>
    </li>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsTreeNodeComponent {
  @Input() node!: AcdsTreeNode;
  expanded = false;

  get hasChildren(): boolean {
    return !!this.node.children && this.node.children.length > 0;
  }
}

@Component({
  selector: "acds-tree-view",
  standalone: true,
  imports: [CommonModule, AcdsTreeNodeComponent],
  template: `
    <ul class="space-y-2 text-sm">
      <acds-tree-node *ngFor="let node of nodes" [node]="node"></acds-tree-node>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsTreeViewComponent {
  @Input() nodes: AcdsTreeNode[] = [];
}
