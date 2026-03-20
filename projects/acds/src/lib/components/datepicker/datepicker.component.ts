import { ChangeDetectionStrategy, Component, forwardRef, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "acds-datepicker",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label class="block space-y-1">
      <span class="text-sm font-medium" *ngIf="label">{{ label }}</span>
      <input
        type="date"
        class="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm focus:border-primary focus:outline-none"
        [disabled]="disabled"
        [ngModel]="value"
        (ngModelChange)="onChange($event)"
        (blur)="onTouched()"
      />
      <span class="text-xs text-muted" *ngIf="hint">{{ hint }}</span>
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AcdsDatepickerComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsDatepickerComponent implements ControlValueAccessor {
  @Input() label = "";
  @Input() hint = "";

  value = "";
  disabled = false;

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value ?? "";
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
