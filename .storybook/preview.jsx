import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";
import "../src/index.css";
import "../src/styles/fonts.css";
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  controls: {
    matchers: { color: /(background|color)$/i, date: /Date$/ },
  },
};
