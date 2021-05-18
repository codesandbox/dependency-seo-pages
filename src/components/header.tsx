import React, { useState } from 'react'
import {
  Stack,
  Button,
  Element,
  Link,
  SearchInput
} from '@codesandbox/components'
import { theme } from './theme'
import { Logo } from './icons'
import styled from 'styled-components'

const LogoLink = styled(Link)`
  @media screen and (max-width: 768px) {
    height: 48px;
    width: 48px;
    display: flex;
    svg {
      margin: auto;
    }
  }
`

const Header: React.FC<{ siteTitle: string }> = () => {
  const [value, setValue] = useState('')
  return (
    <Element
      as="header"
      paddingY={3}
      marginBottom={52}
      css={{
        borderBottom: '1px solid',
        borderColor: theme.colors.grays[600],
        padding: '.5em 1rem',
        maxHeight: 'max-content'
      }}
    >
      <Stack
        align="center"
        justify="space-between"
        css={{
          maxWidth: '1200px',
          margin: 'auto'
        }}
      >
        <LogoLink href="https://codesandbox.io">
          <Logo />
        </LogoLink>
        <Stack gap={2} align="center">
          <Element
            css={{
              '@media screen and (max-width: 768px)': {
                display: 'none'
              },
              padding: '0 1.5rem',
              margin: '0 0 0 -.25rem'
            }}
          >
            <SearchInput
              placeholder="Search CodeSandbox"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
              value={value}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter' && typeof window !== 'undefined') {
                  window.location.href = `https://codesandbox.io/search?query=${value}&page=1&configure%5BhitsPerPage%5D=12`
                }
              }}
            />
          </Element>

          <Button
            variant="secondary"
            as="a"
            href="https://codesandbox.io/s"
            css={{
              textDecoration: 'none',
              width: 'auto',
              height: '26px',
              lineHeight: '26px'
            }}
          >
            Create Sandbox
          </Button>
        </Stack>
      </Stack>
    </Element>
  )
}

export default Header
