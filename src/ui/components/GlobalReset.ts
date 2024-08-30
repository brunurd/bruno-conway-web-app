import { createGlobalStyle } from 'styled-components';

const GlobalReset = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.lightOrange};
  }
`;

export { GlobalReset };
