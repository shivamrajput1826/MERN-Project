import { createGlobalStyle } from "styled-components";
import minireset from "./minireset";

export const Generic = createGlobalStyle`
${minireset}
body{
    -moz-osx-font-smothing:grayscale;
    text-rendering: optimizeLegiblity;
    text-size-adjust:100%;
    font-family:BlinkMacSystemFont,-apple-system, "Segoe UI","Roboto","Oxygen","Ubuntu";
}
`;
