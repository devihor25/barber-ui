import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      surface: string;
      textPrimary: string;
      textSecondary: string;
    };
    fonts: {
      primary: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
