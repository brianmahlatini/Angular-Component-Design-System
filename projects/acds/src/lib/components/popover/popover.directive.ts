import { Directive, ElementRef, HostListener, Input, OnDestroy, TemplateRef } from "@angular/core";
import { Overlay, OverlayRef, FlexibleConnectedPositionStrategy } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { AcdsPopoverPanelComponent } from "./popover-panel.component";

@Directive({
  selector: "[acdsPopover]",
  standalone: true,
})
export class AcdsPopoverDirective implements OnDestroy {
  @Input("acdsPopover") content: string | TemplateRef<unknown> = "";
  @Input() popoverTitle = "";

  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay, private elementRef: ElementRef<HTMLElement>) {}

  @HostListener("click")
  toggle(): void {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.hide();
      return;
    }
    this.show();
  }

  private show(): void {
    if (!this.overlayRef) {
      const positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          { originX: "center", originY: "bottom", overlayX: "center", overlayY: "top", offsetY: 8 },
          { originX: "center", originY: "top", overlayX: "center", overlayY: "bottom", offsetY: -8 },
        ])
        .withFlexibleDimensions(false)
        .withPush(false) as FlexibleConnectedPositionStrategy;

      this.overlayRef = this.overlay.create({
        positionStrategy,
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        hasBackdrop: true,
        backdropClass: "cdk-overlay-transparent-backdrop",
      });

      this.overlayRef.backdropClick().subscribe(() => this.hide());
    }

    const panelPortal = new ComponentPortal(AcdsPopoverPanelComponent);
    const panelRef = this.overlayRef.attach(panelPortal);
    panelRef.instance.title = this.popoverTitle;
    if (this.content instanceof TemplateRef) {
      panelRef.instance.template = this.content;
    } else {
      panelRef.instance.text = this.content;
    }
  }

  private hide(): void {
    this.overlayRef?.detach();
  }

  ngOnDestroy(): void {
    this.overlayRef?.dispose();
  }
}
