import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface Palette {
    structural: Palette["primary"];
    greyColors: Palette["primary"];
    accent: Palette["primary"];
    textColor: Palette["primary"];
  }

  interface PaletteOptions {
    structural?: PaletteOptions["primary"];
    greyColors?: PaletteOptions["primary"];
    accent?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    main600?: string;
    main400?: string;
    main500?: string;
    main300?: string;
    main200?: string;
    main100?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    white?: string;
    linear1?: string;
    linear2?: string;
    color1?: string;
    color2?: string;
    color3?: string;
  }

  interface SimplePaletteColorOptions {
    main600?: string;
    main400?: string;
    main500?: string;
    main300?: string;
    main200?: string;
    main100?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    lowEmphasis?: string;
    white?: string;
    linear1?: string;
    linear2?: string;
    color1?: string;
    color2?: string;
    color3?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading1: true;
    heading2: true;
    caption1: true;
    caption2: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    heading1: {
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "48px",
      textTransform: "none",
    },

    heading2: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "30px",
      textTransform: "none",
    },

    subtitle1: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      textTransform: "none",
    },

    subtitle2: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      textTransform: "none",
    },

    body1: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "22px",
      textTransform: "none",
    },

    body2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "22px",
      textTransform: "none",
    },

    caption1: {
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "16px",
      textTransform: "none",
    },

    caption2: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
      textTransform: "none",
    },
  },

  palette: {
    primary: {
      main: "#0B6D62",
      main500: "#1B877A",
      main300: "#4ABAAD",
      main200: "#77EDDF",
      main100: "#B2FFF6",
    },

    textColor: {
      main: "#000000",
      highEmphasis: "#373C38",
      mediumEmphasis: "#656E66",
      lowEmphasis: "#94A196",
    },

    greyColors: {
      main: "#D6D6D6",
      main200: "#E9EBE9",
      main100: "#F7F7F7",
    },

    structural: {
      main: "#FFFFFF",
      linear1: "linear-gradient(to bottom right, #EFFEFF 0%, #E9FFF4 100%)",
      linear2: "linear-gradient(to bottom right, #E0FFE5 0%, #FFFAEA 100%)",
      color1: "#E8FFFC",
      color2: "#E7FCE0",
      color3: "#F5FFF7",
    },

    accent: {
      main: "#FFFFFF",
      color1: "#ED8F02",
      color2: "#FF725E",
    },
  },
});

export default theme;
