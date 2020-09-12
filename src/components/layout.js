import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import normalize from 'normalize.css'

import Footer from './footer'
import { ThemeProvider } from '@codesandbox/components'
import designLanguage from '@codesandbox/components/lib/design-language/index'

import Header from './header'

const Style = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Inter', 'Roboto', sans-serif;
    background: ${designLanguage.colors.grays[900]} !important;
    color: ${designLanguage.colors.white};
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
  max-width: 1200px;
  padding: 0 1rem;
  display: grid;
  grid-gap: 1rem;

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
  ${props =>
    !props.notFound &&
    css`
      @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 300px;
        grid-template-areas:
          'header .'
          'grid aside';
      }
    `}
`

const Layout = ({ children, notFound }) => {
  return (
    <ThemeProvider>
      <>
        <Style />
        <Header siteTitle="Dependency Page" />
        <Main notFound={notFound}>{children}</Main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
