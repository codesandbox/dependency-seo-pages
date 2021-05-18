import React from 'react'
import { Text, Stack, Link, Element } from '@codesandbox/components'
import styled from 'styled-components'

import { theme } from './theme'
import { Github, Twitter, Discord } from './icons'

export const FooterWrapper = styled.footer`
  padding-bottom: 1rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
`

export const Nav = styled.section`
  padding-top: 2.5rem;
  border-top: 1px solid ${theme.colors.grays[600]};
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
    padding-top: 4px;
    padding-bottom: 4px;
    display: inline-block;
    width: 100%;

    @media screen and (max-width: 768px) {
      min-height: 48px;
    }

    &:hover {
      color: ${theme.colors.white};
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

const footerNavElements = [
  {
    title: 'Product',
    elements: [
      {
        text: 'Coding',
        link: '/coding'
      },
      {
        text: 'Prototyping',
        link: '/prototyping'
      },
      {
        text: 'Knowledge Sharing',
        link: '/knowledge-sharing'
      },
      {
        text: 'Feedback',
        link: '/feedback'
      },
      {
        text: 'What’s New',
        link: '/changelog'
      }
    ]
  },
  {
    title: 'Explore',
    elements: [
      {
        text: 'Featured Sandboxes',
        link: '/explore'
      },
      {
        external: true,
        text: 'Search Sandboxes',
        link: '/search'
      }
    ]
  },
  {
    title: 'For',
    elements: [
      {
        text: 'Individuals',
        link: '/personal'
      },
      {
        text: 'Teams',
        link: '/team'
      },
      {
        text: 'Enterprise',
        link: '/enterprise'
      }
    ]
  },
  {
    title: 'About',
    elements: [
      {
        text: 'Pricing',
        link: '/pricing'
      },
      {
        text: 'Company',
        link: '/company'
      },
      {
        text: 'Blog',
        link: '/blog'
      },
      {
        text: 'Podcasts',
        link: '/podcasts'
      },
      {
        text: 'Careers',
        link: '/jobs'
      },
      {
        text: 'Terms Of Use',
        link: '/legal/terms'
      },
      {
        text: 'Privacy Policy',
        link: '/legal/privacy'
      }
    ]
  },
  {
    title: 'Support',
    elements: [
      {
        text: 'Documentation',
        link: '/docs'
      },
      {
        text: 'Contact Support',
        external: true,
        link: 'mailto:hello@codesandbox.io'
      },
      {
        text: 'Status',
        external: true,
        link: 'https://status.codesandbox.io/'
      }
    ]
  }
]

const Footer: React.FC = () => (
  <FooterWrapper>
    <Nav>
      {footerNavElements.map((menu) => (
        <Element as="ul">
          <li>
            <Text size={23}>{menu.title}</Text>
          </li>
          {menu.elements.map(({ text, link }) => (
            <li key={text}>
              <Text variant="muted">
                <Link href={`https://codesandbox.io/${link}`}>{text}</Link>
              </Text>
            </li>
          ))}
        </Element>
      ))}
    </Nav>

    <Stack align="center" justify="center" gap={4} as="ul">
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
        <a title="Go to Spectrum" href="https://discord.com/invite/5BpufEP7MH">
          <Discord />
        </a>
      </li>
    </Stack>
    <Text marginTop={24} block align="center" variant="muted">
      Copyright © {new Date().getFullYear()} CodeSandbox BV
    </Text>
  </FooterWrapper>
)

export default Footer
