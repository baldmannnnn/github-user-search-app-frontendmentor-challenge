import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

:root {
  --clr-primary: hsl(212, 100%, 50%);
  --clr-primary-hover: hsla(212, 100%, 69%, 1);
  --clr-secondary: hsl(217, 20%, 51%);
  --clr-accent-100: hsl(217, 35%, 45%);
  --clr-accent-300: hsl(217, 21%, 21%);
  --clr-accent-500: hsl(220, 40%, 13%);
  --clr-accent-600: hsl(220, 18%, 16%);
  --clr-accent-700: hsl(222, 41%, 20%);
  --clr-neutral-100: hsl(0, 0%, 100%);
  --clr-neutral-300: hsl(0,0%, 100%);
  --clr-neutral-500: hsl(227, 100%, 98%);
}

*,*::before,*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Space Mono', monospace;
  font-size: 16px;
  background-color: ${({ theme }) => theme.backgroundColor1};
  min-height: 100vh;
}

#root {
  min-height: 100vh;
  }
`

export const Container = styled.div`
  width: clamp(20.4375rem, 74.6%, 45.625rem);
  position: relative;
  margin-inline: auto;
  height: 100vh;
`
