import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

export type AcdsTableColumn<T> = {
  key: keyof T;
  label: string;
  width?: string;
};

@Component({
  selector: "acds-data-table",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overflow-x-auto rounded-lg border border-border">
      <table class="min-w-[520px] w-full text-left text-sm">
        <thead class="bg-muted/10">
          <tr>
            <th
              *ngFor="let column of columns"
              class="px-4 py-3 font-medium text-muted"
              [style.width]="column.width || 'auto'"
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows" class="border-t border-border">
            <td *ngFor="let column of columns" class="px-4 py-3">
              {{ row[column.key] }}
            </td>
          </tr>
          <tr *ngIf="rows.length === 0">
            <td [attr.colspan]="columns.length" class="px-4 py-6 text-center text-muted">No data.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsDataTableComponent<T extends Record<string, string | number>> {
  @Input() columns: AcdsTableColumn<T>[] = [];
  @Input() rows: T[] = [];
}
