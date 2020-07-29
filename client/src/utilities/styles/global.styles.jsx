import { createGlobalStyle } from 'styled-components';
import { helpers, breakpoints } from './helpers.styles';


const { primaryColor, textColor1 } = helpers;
const {  phone, tabletLandscape, tabletPortrait, highResDesktop } = breakpoints;

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /* equivalent to 10px; 1rem = 10px; 10px/16px */
  }

  body {
    box-sizing: border-box;
    font-family: 'Muli', sans-serif;
    background-color: ${primaryColor};
    color: ${textColor1};
  }

  img {
    display: block;
  }

  //NOTE: DESKTOP IS DEFAULT

  @media ${phone} {
    html {
      // 7px
      font-size: 43.75%;
    }
  }
  
  @media ${tabletPortrait} {
    html {
      // 8px
      font-size: 50%;
    }
  }

  @media ${tabletLandscape} {
    html {
      // 9px
      font-size: 56.25%;
    }
  }
  

  @media ${highResDesktop} {
    html {
      // 12px
      font-size: 75%;
    }
  }

`;