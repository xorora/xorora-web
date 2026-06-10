import type { Config } from "tailwindcss";

/**
 * Xorora design tokens — sourced from colors_and_type.css.
 * Referenced from app/globals.css via @config for Tailwind v4.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        xo: {
          ink: "#08080D",
          indigo: "#464C9F",
          white: "#FFFFFF",
        },
        indigo: {
          50: "#EEEFF8",
          100: "#DDDFF0",
          200: "#BBBFE1",
          300: "#9398CF",
          400: "#6B70B6",
          500: "#464C9F",
          600: "#3A3F86",
          700: "#2F336B",
          800: "#242750",
          900: "#1A1C3A",
        },
        tangerine: {
          300: "#FBC79E",
          400: "#FF8A3D",
          500: "#F26B21",
          600: "#D2540F",
          700: "#A8420B",
        },
        navy: {
          700: "#0A1230",
          800: "#061029",
          900: "#010C28",
          950: "#02060F",
        },
        slate: {
          50: "#F6F7FB",
          100: "#ECEEF5",
          200: "#DCDFEA",
          300: "#C2C7D8",
          400: "#9CA2BA",
          500: "#777E99",
          600: "#5B6178",
          700: "#444A5E",
          800: "#2C3040",
          900: "#181B26",
          950: "#0C0E16",
        },
        success: "#2E9E6B",
        warning: "#D9A23B",
        danger: "#D2453E",
        info: "#464C9F",
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        fg1: "var(--fg1)",
        fg2: "var(--fg2)",
        fg3: "var(--fg3)",
        "fg-on-accent": "var(--fg-on-accent)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-press": "var(--accent-press)",
        "accent-soft": "var(--accent-soft)",
        link: "var(--link)",
        "focus-ring": "var(--focus-ring)",
      },
      spacing: {
        "sp-1": "4px",
        "sp-2": "8px",
        "sp-3": "12px",
        "sp-4": "16px",
        "sp-5": "24px",
        "sp-6": "32px",
        "sp-7": "48px",
        "sp-8": "64px",
        "sp-9": "96px",
        "sp-10": "128px",
      },
      borderRadius: {
        "r-xs": "4px",
        "r-sm": "6px",
        "r-md": "10px",
        "r-lg": "16px",
        "r-xl": "24px",
        pill: "999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(8,8,13,0.06)",
        sm: "0 1px 3px rgba(8,8,13,0.08), 0 1px 2px rgba(8,8,13,0.04)",
        md: "0 4px 12px rgba(8,8,13,0.08), 0 2px 4px rgba(8,8,13,0.05)",
        lg: "0 12px 32px rgba(8,8,13,0.12), 0 4px 8px rgba(8,8,13,0.06)",
        xl: "0 24px 64px rgba(8,8,13,0.16)",
        focus: "0 0 0 3px rgba(242,107,33,0.30)",
        "glow-indigo": "0 8px 40px rgba(70,76,159,0.35)",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: [
          "64px",
          { lineHeight: "1.05", letterSpacing: "-0.01em", fontWeight: "800" },
        ],
        h1: [
          "48px",
          { lineHeight: "1.05", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        h2: ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["26px", { lineHeight: "1.2", fontWeight: "600" }],
        h4: ["20px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["16px", { lineHeight: "1.55", fontWeight: "400" }],
        sm: ["14px", { lineHeight: "1.55", fontWeight: "400" }],
        xs: ["12px", { lineHeight: "1.55", fontWeight: "400" }],
        eyebrow: [
          "13px",
          {
            lineHeight: "1.2",
            letterSpacing: "0.18em",
            fontWeight: "600",
          },
        ],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        display: "-0.01em",
      },
      lineHeight: {
        tight: "1.05",
        snug: "1.2",
        normal: "1.55",
      },
      transitionDuration: {
        120: "120ms",
        140: "140ms",
        180: "180ms",
        220: "220ms",
        250: "250ms",
        400: "400ms",
      },
      transitionDelay: {
        180: "180ms",
      },
    },
  },
};

export default config;
