import React, { CSSProperties } from 'react'
import { Text, Element, Stack, Link, Button } from '@codesandbox/components'
import getIcon from '@codesandbox/common/lib/templates/icons'
import styled from 'styled-components'
import Sidebar from './sidebar'
import {
  capitalize,
  getScreenshot,
  getUrlAuthor,
  getUrlLoadMore,
  getUrlSandbox
} from '../components/utils'
import { theme } from './theme'
import { TemplateType } from '@codesandbox/common/lib/templates'

const ScreenShot = styled.img`
  object-fit: cover;
  object-position: 50% 0;
  display: block;
`

const MainComponent = styled.div`
  grid-area: grid;
  grid-template-columns: 1fr;
`

const IconHolder = styled.div`
  width: 24px;
  height: 24px;
  padding: 0.25rem;
  > svg {
    width: 1rem !important;
    height: 1rem !important;
  }
`

const List = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 2rem;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Card = styled.div`
  background: ${theme.colors.grays[700]};
  border-radius: ${theme.radii.medium}px;
  clip-path: inset(0px round 0.5rem);
  border: 1px solid ${theme.colors.grays[600]};
  max-width: 100%;
  overflow: hidden;

  svg {
    width: 24px;
    height: 24px;
    filter: grayscale(1);
  }

  .screenshot {
    width: 100%;
  }
`

const Main: React.FC<{
  dependency: string
  hasMoreToLoad: boolean
  sandboxes: {
    objectID: string
    title?: string
    description?: string
    template?: TemplateType
    author?: {
      name?: string
      avatar_url?: string
      username?: string
    }
  }[]
}> = ({ dependency, sandboxes, hasMoreToLoad }) => {
  const name = dependency
    .split('-')
    .map((a) => capitalize(a))
    .join(' ')

  return (
    <>
      <div style={{ gridArea: 'header' }}>
        <Text style={{ margin: 0 }} as="h1" weight="400" size={40} block>
          {name} Examples
        </Text>
        <Text
          as="h2"
          weight="400"
          marginBottom={10}
          marginTop={2}
          block
          variant="muted"
          style={{ maxWidth: 600, lineHeight: 1.6 }}
        >
          Learn how to use {dependency} by viewing and forking example apps that
          make use of {dependency} on CodeSandbox.
        </Text>
      </div>

      <MainComponent>
        <div>
          <List>
            {sandboxes.map((a) => {
              const url = getUrlSandbox(a.objectID)
              // const IconTemplate = getIcon(a.template || 'static')

              return (
                <Card key={a.objectID}>
                  <Link href={url}>
                    <ScreenShot
                      className="screenshot"
                      alt={a.title}
                      src={getScreenshot(a.objectID)}
                      height={162}
                    />
                  </Link>
                  <Element paddingX={4} paddingTop={4} paddingBottom={5}>
                    <div>
                      <Link href={url}>
                        <Text block>{a.title || a.objectID}</Text>
                      </Link>

                      <Link href={url}>
                        <Text
                          block
                          marginTop={2}
                          variant="muted"
                          style={
                            {
                              height: 28,
                              wordBreak: 'break-all',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              '-webkit-line-clamp': '2',
                              WebkitBoxOrient: 'vertical'
                            } as CSSProperties
                          }
                        >
                          {a.description}
                        </Text>
                      </Link>
                    </div>
                    <Stack align="center" justify="space-between" marginTop={5}>
                      {a.author ? (
                        <Stack align="center" gap={2}>
                          <img
                            width={24}
                            height={24}
                            src={a.author.avatar_url}
                            alt={a.author.username}
                          />

                          <Link href={getUrlAuthor(a.author.username)}>
                            {a.author.username}
                          </Link>
                        </Stack>
                      ) : (
                        <Element />
                      )}

                      <IconHolder>{/* <IconTemplate /> */}</IconHolder>
                    </Stack>
                  </Element>
                </Card>
              )
            })}
          </List>

          {hasMoreToLoad && (
            <Button
              as="a"
              marginTop={4}
              style={{ textDecoration: 'none' }}
              href={getUrlLoadMore(dependency)}
              variant="secondary"
            >
              Find more examples
            </Button>
          )}
        </div>
      </MainComponent>
      {/* <Sidebar sandboxes={dependency} /> */}
    </>
  )
}

export default Main
