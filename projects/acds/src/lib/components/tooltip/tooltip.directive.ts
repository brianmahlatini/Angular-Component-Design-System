import { Directive, ElementRef, HostListener, Input, OnDestroy } from "@angular/core";
import { Overlay, OverlayRef, FlexibleConnectedPositionStrategy } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { AcdsTooltipPanelComponent } from "./tooltip-panel.component";

@Directive({
  selector: "[acdsTooltip]",
  standalone: true,
})
export class AcdsTooltipDirective implements OnDestroy {
  @Input("acdsTooltip") text = "";

  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay, private elementRef: ElementRef<HTMLElement>) {}

  @HostListener("mouseenter")
  @HostListener("focus")
  show(): void {
    if (!this.text) return;
    if (!this.overlayRef) {
      const positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          { originX: "center", originY: "top", overlayX: "center", overlayY: "bottom", offsetY: -8 },
          { originX: "center", originY: "bottom", overlayX: "center", overlayY: "top", offsetY: 8 },
        ])
        .withFlexibleDimensions(false)
        .withPush(false) as FlexibleConnectedPositionStrategy;

      this.overlayRef = this.overlay.create({ positionStrategy, scrollStrategy: this.overlay.scrollStrategies.reposition() });
    }

    const tooltipPortal = new ComponentPortal(AcdsTooltipPanelComponent);
    const tooltipRef = this.overlayRef.attach(tooltipPortal);
    tooltipRef.instance.text = this.text;
  }

  @HostListener("mouseleave")
  @HostListener("blur")
  hide(): void {
    this.overlayRef?.detach();
  }

  ngOnDestroy(): void {
    this.overlayRef?.dispose();
  }
}
