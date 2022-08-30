import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    postBg: string;
    primaryText: string;
    loginBorderRadius: string;
  }
}

export const theme: DefaultTheme = {
  main: "#18191A",
  postBg: "#242526",
  primaryText: "#E4E6EB",
  loginBorderRadius: "20px",
};
