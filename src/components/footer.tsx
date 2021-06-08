import React from 'react'
import { Text, Stack, Link, Element } from '@codesandbox/components'
import styled from 'styled-components'

import { theme } from './theme'
import { Github, Twitter, Discord } from './icons'

const FooterWrapper = styled.footer`
  padding-bottom: 1rem;

  margin-bottom: 3rem;
  border-top: 1px solid #343434;
`

const Nav = styled.section`
  padding-top: 6rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 3rem;
  max-width: 80%;
  width: 1200px;
  margin: auto;
  margin-bottom: 8rem;

  a {
    color: inherit;
    text-decoration: none;
    padding-top: 6px;
    padding-bottom: 6px;
    display: inline-block;

    &:hover {
      color: #fff;
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

const Social = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  svg {
    path {
      transition: all 200ms ease;
    }

    &:hover path {
      fill: #fff;
    }
  }
`

const Title = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  line-height: 23px;
  margin-bottom: 16px;
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
            <Title>{menu.title}</Title>
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

    <Social>
      <li>
        <a
          style={{ marginRight: 16 }}
          title="Go to Github"
          href="https://github.com/codesandbox/codesandbox-client"
        >
          <Github />
        </a>
      </li>
      <li>
        <a
          style={{ marginRight: 10 }}
          title="Go to Twitter"
          href="https://twitter.com/codesandbox"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a title="Go to Discord" href="https://discord.com/invite/5BpufEP7MH">
          <Discord />
        </a>
      </li>
    </Social>
    <Text marginTop={24} block align="center" variant="muted">
      Copyright © {new Date().getFullYear()} CodeSandbox BV
    </Text>
  </FooterWrapper>
)

export default Footer
