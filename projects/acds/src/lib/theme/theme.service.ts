import { Injectable } from "@angular/core";
import { AcdsThemeTokens, ACDS_DEFAULT_THEME } from "./theme.tokens";

@Injectable({
  providedIn: "root",
})
export class AcdsThemeService {
  applyTheme(tokens: Partial<AcdsThemeTokens>, target: HTMLElement = document.documentElement): void {
    const merged = { ...ACDS_DEFAULT_THEME, ...tokens };
    target.style.setProperty("--acds-color-bg", merged.bg);
    target.style.setProperty("--acds-color-fg", merged.fg);
    target.style.setProperty("--acds-color-muted", merged.muted);
    target.style.setProperty("--acds-color-primary", merged.primary);
    target.style.setProperty("--acds-color-primary-foreground", merged.primaryForeground);
    target.style.setProperty("--acds-color-accent", merged.accent);
    target.style.setProperty("--acds-color-accent-foreground", merged.accentForeground);
    target.style.setProperty("--acds-color-border", merged.border);
    target.style.setProperty("--acds-color-danger", merged.danger);
    target.style.setProperty("--acds-color-danger-foreground", merged.dangerForeground);
    target.style.setProperty("--acds-radius-sm", merged.radiusSm);
    target.style.setProperty("--acds-radius-md", merged.radiusMd);
    target.style.setProperty("--acds-radius-lg", merged.radiusLg);
    target.style.setProperty("--acds-shadow-sm", merged.shadowSm);
    target.style.setProperty("--acds-shadow-md", merged.shadowMd);
    target.style.setProperty("--acds-shadow-lg", merged.shadowLg);
    target.style.setProperty("--acds-font-display", merged.fontDisplay);
    target.style.setProperty("--acds-font-body", merged.fontBody);
  }
}
