import { createTheme } from "@mui/material/styles";

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    p: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    p?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
  }
}

declare module "@mui/material/styles" {
  interface TypeBackground {
    subtle: string;
  }

  interface TypeBackgroundOptions {
    subtle?: string;
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFC107",
      light: "#FFD54F",
      dark: "#FFA000",
      contrastText: "#000000",
    },
    secondary: {
      main: "#2E7D32",
      light: "#4CAF50",
      dark: "#1B5E20",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#D32F2F",
      light: "#EF5350",
      dark: "#C62828",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#388E3C",
      light: "#4CAF50",
      dark: "#2E7D32",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F9FA",
      subtle: "#F5F5F5",
    },
    text: {
      primary: "#212121",
      secondary: "#424242",
      disabled: "#757575",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "Avenir",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
});

theme.typography = {
  ...theme.typography,
  h1: {
    fontSize: pxToRem(40),
    color: "text.primary",
    fontWeight: 500,
    lineHeight: 1.2,
    [theme.breakpoints.up("sm")]: {
      fontSize: pxToRem(88),
    },
  },
  h2: {
    fontSize: pxToRem(36),
    color: "text.primary",
    fontWeight: 500,
    lineHeight: 1.2,
    [theme.breakpoints.up("sm")]: {
      fontSize: pxToRem(72),
    },
  },
  h3: {
    fontSize: pxToRem(32),
    color: "text.primary",
    fontWeight: 500,
    lineHeight: 1.2,
    [theme.breakpoints.up("sm")]: {
      fontSize: pxToRem(56),
    },
  },
  h4: {
    fontSize: pxToRem(24),
    color: "text.primary",
    fontWeight: 500,
    lineHeight: 1.2,
    [theme.breakpoints.up("sm")]: {
      fontSize: pxToRem(30),
    },
  },
  h5: {
    fontSize: pxToRem(20),
    color: "text.primary",
    fontWeight: 500,
    lineHeight: 1.4,
    [theme.breakpoints.up("sm")]: {
      fontSize: pxToRem(24),
    },
  },
  h6: {
    fontSize: pxToRem(18),
    color: "text.primary",
    fontWeight: 500,
    lineHeight: 1.4,
    [theme.breakpoints.up("sm")]: {
      fontSize: pxToRem(20),
    },
  },
  p: {
    fontSize: pxToRem(16),
    color: "#000",
    fontWeight: 300,
    [theme.breakpoints.up("sm")]: {
      fontSize: pxToRem(18),
    },
  },
};

export default theme;
