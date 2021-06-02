import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import normalize from 'normalize.css'

import Footer from './footer'
import { ThemeProvider } from '@codesandbox/components'

import Header from './header'
import { theme } from './theme'

const Style = createGlobalStyle`
  ${normalize}
  
  body {
    font-family: 'Inter', 'Roboto', sans-serif;
    background: ${theme.colors.grays[900]} !important;
    color: ${theme.colors.white};
    font-size: 13px;

    ul, li {
      padding: 0;
      list-style: none;
    }

    * {
      box-sizing: border-box;
    }
  }
`

const Main = styled.main`
  margin: 0 auto;
  margin-bottom: 6em;
  max-width: 1200px;
  padding: 0 1rem;
  display: grid;
  grid-gap: 1rem;
  min-height: 50vh;

  grid-template-columns: 1fr;
  column-gap: 2rem;
  grid-template-areas:
    'header'
    'grid'
    'aside';
  overflow: hidden;

  @media screen and (min-width: 567px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'grid '
      'aside';
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 300px;
    grid-template-areas:
      'header .'
      'grid aside';
  }
`

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Style />
        <Header siteTitle="Dependency Page" />
        <Main>{children}</Main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
