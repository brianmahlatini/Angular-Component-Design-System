export type AcdsThemeTokens = {
  bg: string;
  fg: string;
  muted: string;
  primary: string;
  primaryForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  danger: string;
  dangerForeground: string;
  radiusSm: string;
  radiusMd: string;
  radiusLg: string;
  shadowSm: string;
  shadowMd: string;
  shadowLg: string;
  fontDisplay: string;
  fontBody: string;
};

export const ACDS_DEFAULT_THEME: AcdsThemeTokens = {
  bg: "#f7f5f2",
  fg: "#1e1b16",
  muted: "#6b625c",
  primary: "#0f766e",
  primaryForeground: "#f8fafc",
  accent: "#f59e0b",
  accentForeground: "#1f1300",
  border: "#e1ddd7",
  danger: "#b42318",
  dangerForeground: "#fff5f5",
  radiusSm: "6px",
  radiusMd: "10px",
  radiusLg: "16px",
  shadowSm: "0 1px 2px rgba(22, 17, 12, 0.1)",
  shadowMd: "0 8px 20px rgba(22, 17, 12, 0.14)",
  shadowLg: "0 20px 40px rgba(22, 17, 12, 0.2)",
  fontDisplay: "\"Space Grotesk\", ui-sans-serif, system-ui",
  fontBody: "\"Inter\", ui-sans-serif, system-ui",
};
