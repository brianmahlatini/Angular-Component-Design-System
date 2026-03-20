import { ChangeDetectionStrategy, Component, forwardRef, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

export type AcdsMultiSelectOption = { label: string; value: string };

@Component({
  selector: "acds-multi-select",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label class="block space-y-1">
      <span class="text-sm font-medium" *ngIf="label">{{ label }}</span>
      <select
        class="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm focus:border-primary focus:outline-none"
        multiple
        [disabled]="disabled"
        (change)="onSelectChange($event)"
      >
        <option *ngFor="let option of options" [value]="option.value" [selected]="value.includes(option.value)">
          {{ option.label }}
        </option>
      </select>
      <span class="text-xs text-muted" *ngIf="hint">{{ hint }}</span>
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AcdsMultiSelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsMultiSelectComponent implements ControlValueAccessor {
  @Input() label = "";
  @Input() hint = "";
  @Input() options: AcdsMultiSelectOption[] = [];

  value: string[] = [];
  disabled = false;

  onChange = (value: string[]) => {};
  onTouched = () => {};

  writeValue(value: string[]): void {
    this.value = value ?? [];
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selected = Array.from(target.selectedOptions).map((option) => option.value);
    this.value = selected;
    this.onChange(selected);
    this.onTouched();
  }
}
