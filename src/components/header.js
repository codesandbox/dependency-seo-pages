import React, { useState } from 'react'
import {
  Stack,
  Button,
  Element,
  Link,
  SearchInput
} from '@codesandbox/components'
import Logo from './logo'
import designLanguage from '@codesandbox/components/lib/design-language/index'

const Header = () => {
  const [value, setValue] = useState('')
  return (
    <Element
      as="header"
      paddingY={3}
      marginBottom={52}
      css={{
        borderBottom: '1px solid',
        borderColor: designLanguage.colors.grays[600],
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
        <Link href="https://codesandbox.io">
          <Logo />
        </Link>
        <Stack gap={2} align="center">
          <SearchInput
            style={{ padding: '0 1.5rem', margin: '0 0 0 -.25rem' }}
            placeholder="Search CodeSandbox"
            onChange={e => setValue(e.target.value)}
            value={value}
            onKeyDown={e => {
              if (e.key === 'Enter' && typeof window !== 'undefined') {
                window.location.href = `https://codesandbox.io/search?query=${value}&page=1&configure%5BhitsPerPage%5D=12`
              }
            }}
          />

          <Button
            variant="secondary"
            as="a"
            href="https://codesandbox.io/s"
            type="link"
            style={{
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
