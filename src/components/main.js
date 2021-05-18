import React from 'react'
import {
  Text,
  Element,
  Stack,
  Link,
  Button,
  Header
} from '@codesandbox/components'
import getIcon from '@codesandbox/common/lib/templates/icons'
import styled from 'styled-components'
import designLanguage from '@codesandbox/components/lib/design-language/index'
import Sidebar from './sidebar'

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
  background: ${designLanguage.colors.grays[700]};
  border-radius: ${designLanguage.radii.medium}px;
  clip-path: inset(0px round 0.5rem);
  border: 1px solid ${designLanguage.colors.grays[600]};
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

const getScreenshot = id =>
  `https://codesandbox.io/api/v1/sandboxes/${id}/screenshot.png`

const Main = ({ name, dependency }) => {
  return (
    <>
      <div style={{ gridArea: 'header' }}>
        <Text style={{ margin: 0 }} as="h1" weight="400" size={40} block>
          {name} Examples
        </Text>
        <Text
          as="h2"
          weight="400"
          lineHeight="2rem"
          marginBottom={10}
          marginTop={2}
          block
          variant="muted"
          style={{ maxWidth: 600 }}
        >
          Learn how to use {dependency.dependency} by viewing and forking example
          apps that make use of {dependency.dependency} on CodeSandbox.
        </Text>
      </div>
      <MainComponent>
        <div>
          <List>
            {dependency.sandboxes.slice(0, 12).map(a => (
              <Card key={a.objectID}>
                <Link href={`https://codesandbox.io/s/${a.objectID}`}>
                  <ScreenShot
                    className="screenshot"
                    alt={a.title}
                    src={getScreenshot(a.objectID)}
                    height={162}
                  />
                </Link>
                <Element paddingX={4} paddingTop={4} paddingBottom={5}>
                  <div>
                    <Link href={`https://codesandbox.io/s/${a.objectID}`}>
                      <Text block>{a.title || a.objectID}</Text>
                    </Link>

                    <Link href={`https://codesandbox.io/s/${a.objectID}`}>
                      <Text
                        block
                        marginTop={2}
                        variant="muted"
                        style={{
                          height: 28,
                          wordBreak: 'break-all',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          '-webkit-line-clamp': '2',
                          WebkitBoxOrient: 'vertical'
                        }}
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

                        <Link
                          href={`https://codesandbox.io/u/${a.author.username}`}
                        >
                          {a.author.username}
                        </Link>
                      </Stack>
                    ) : (
                      <Element />
                    )}

                    <IconHolder>{getIcon(a.template)({})}</IconHolder>
                  </Stack>
                </Element>
              </Card>
            ))}
          </List>

          {dependency.sandboxes.length >= 12 && (
            <Button
              as="a"
              type="link"
              marginTop={4}
              style={{ textDecoration: 'none' }}
              href={`https://codesandbox.io/search?refinementList%5Btemplate%5D=&refinementList%5Bnpm_dependencies.dependency%5D%5B0%5D=${dependency.dependency}&page=2&configure%5BhitsPerPage%5D=12`}
              variant="secondary"
            >
              Find more examples
            </Button>
          )}
        </div>
      </MainComponent>
      <Sidebar sandboxes={dependency} />
    </>
  )
}

export default Main
