import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "emotion-theming";
import theme from "../src/theme/index";
import "./storybook.css";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
    </MUIThemeProvider>
  ),
];