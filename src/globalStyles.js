import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*:root {
  --clr-primary: hsl(212, 100%, 50%);
  --clr-secondary: hsl(217, 20%, 51%);
  --clr-accent-100: hsl(217, 35%, 45%);
  --clr-accent-300: hsl(217, 21%, 21%);
  --clr-accent-500: hsl(220, 40%, 13%);
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
  min-height: 100vh;
  font-size: 16px;
  background-color: var(--clr-neutral-500)
}
`

export const Container = styled.div`
  width: clamp(20.4375rem, 74.6%, 730px);
  margin: 31px auto;
`
