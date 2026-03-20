import { ChangeDetectionStrategy, Component, forwardRef, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "acds-autocomplete",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label class="block space-y-1">
      <span class="text-sm font-medium" *ngIf="label">{{ label }}</span>
      <input
        class="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm focus:border-primary focus:outline-none"
        [attr.list]="listId"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [ngModel]="value"
        (ngModelChange)="onChange($event)"
        (blur)="onTouched()"
      />
      <datalist [id]="listId">
        <option *ngFor="let option of options" [value]="option"></option>
      </datalist>
      <span class="text-xs text-muted" *ngIf="hint">{{ hint }}</span>
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AcdsAutocompleteComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcdsAutocompleteComponent implements ControlValueAccessor {
  @Input() label = "";
  @Input() placeholder = "";
  @Input() hint = "";
  @Input() options: string[] = [];

  value = "";
  disabled = false;
  listId = `acds-autocomplete-${Math.random().toString(36).slice(2)}`;

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
