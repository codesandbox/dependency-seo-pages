import React from 'react'
import { Text, Stack, Link, Element } from '@codesandbox/components'
import styled from 'styled-components'
import Github from './GitHub'
import Spectrum from './spectrum'
import Twitter from './twitter'
import designLanguage from '@codesandbox/components/lib/design-language/index'

export const FooterWrapper = styled.footer`
  padding-bottom: 1rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
`

export const Nav = styled.section`
  padding-top: 2.5rem;
  border-top: 1px solid ${designLanguage.colors.grays[600]};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 3rem;
  max-width: 80%;
  width: 1200px;
  margin: auto;
  margin-bottom: 4.5rem;
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${designLanguage.colors.white};
    }
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li:first-child {
      margin-bottom: 1rem;
    }
  }
`

const Footer = () => (
  <FooterWrapper>
    <Nav>
      <Element as="ul" css={{ li: { marginBottom: 8 } }}>
        <li>
          <Text size={23}>Product</Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/ide">Online IDE</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/embeds">Embed</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/ci">CodeSandbox CI</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/team">Teams</Link>
          </Text>
        </li>
      </Element>
      <Element as="ul" css={{ li: { marginBottom: 8 } }}>
        <li>
          <Text size={23}>Explore</Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/explore">
              Featured Sandboxes
            </Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <a href="/search">Search Sandboxes</a>
          </Text>
        </li>
      </Element>
      <Element as="ul" css={{ li: { marginBottom: 8 } }}>
        <li>
          <Text size={23}>Use Cases</Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/prototyping">Prototyping</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/learning">Learning</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/hiring">Hiring</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/onboarding">Onboarding</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/collaboration">
              Collaboration
            </Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/open-source">Open Source</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/devrel">DevRel</Link>
          </Text>
        </li>
      </Element>

      <Element as="ul" css={{ li: { marginBottom: 8 } }}>
        <li>
          <Text size={23}>About</Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/company">Company</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/blog">Blog</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/pricing">Pricing</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/jobs">Careers</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/legal">Legal</Link>
          </Text>
        </li>
      </Element>

      <Element as="ul" css={{ li: { marginBottom: 8 } }}>
        <li>
          <Text size={23}>Support</Text>
        </li>
        <li>
          <Text variant="muted">
            <Link href="https://codesandbox.io/docs">Documentation</Link>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <a href="mailto:hello@codesandbox.io">Contact Support</a>
          </Text>
        </li>
        <li>
          <Text variant="muted">
            <a href="https://status.codesandbox.io">Status</a>
          </Text>
        </li>
      </Element>
    </Nav>
    <Stack align="center" justify="center" gap={4}>
      <li>
        <a
          title="Go to Github"
          href="https://github.com/codesandbox/codesandbox-client"
        >
          <Github />
        </a>
      </li>
      <li>
        <a title="Go to Twitter" href="https://twitter.com/codesandbox">
          <Twitter />
        </a>
      </li>
      <li>
        <a title="Go to Spectrum" href="https://spectrum.chat/codesandbox">
          <Spectrum />
        </a>
      </li>
    </Stack>
    <Text marginTop={24} block align="center" variant="muted">
      Copyright © {new Date().getFullYear()} CodeSandbox BV
    </Text>
  </FooterWrapper>
)

export default Footer
