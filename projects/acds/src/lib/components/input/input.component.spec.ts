import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AcdsInputComponent } from "./input.component";

describe("AcdsInputComponent", () => {
  let fixture: ComponentFixture<AcdsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcdsInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcdsInputComponent);
    fixture.detectChanges();
  });

  it("renders an input", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("input")).toBeTruthy();
  });
});
