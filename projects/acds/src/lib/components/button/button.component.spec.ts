import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AcdsButtonComponent } from "./button.component";

describe("AcdsButtonComponent", () => {
  let fixture: ComponentFixture<AcdsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcdsButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcdsButtonComponent);
    fixture.componentInstance.variant = "primary";
    fixture.detectChanges();
  });

  it("renders button content", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("button")).toBeTruthy();
  });
});
