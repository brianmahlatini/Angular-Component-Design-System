/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/playground/src/**/*.{html,ts}",
    "./projects/acds/src/**/*.{html,ts}",
    "./.storybook/**/*.{html,ts,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--acds-color-bg)",
        fg: "var(--acds-color-fg)",
        muted: "var(--acds-color-muted)",
        primary: "var(--acds-color-primary)",
        "primary-foreground": "var(--acds-color-primary-foreground)",
        accent: "var(--acds-color-accent)",
        "accent-foreground": "var(--acds-color-accent-foreground)",
        border: "var(--acds-color-border)",
        danger: "var(--acds-color-danger)",
        "danger-foreground": "var(--acds-color-danger-foreground)",
      },
      borderRadius: {
        sm: "var(--acds-radius-sm)",
        md: "var(--acds-radius-md)",
        lg: "var(--acds-radius-lg)",
      },
      boxShadow: {
        sm: "var(--acds-shadow-sm)",
        md: "var(--acds-shadow-md)",
        lg: "var(--acds-shadow-lg)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui"],
        body: ["'Inter'", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
}
