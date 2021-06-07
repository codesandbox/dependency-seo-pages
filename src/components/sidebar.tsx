import React, { useState, useEffect } from 'react'
import { Text, Element, Stack, Link } from '@codesandbox/components'
import styled from 'styled-components'
import { GlobeIcon, GHIcon, IssuesIcon, NPMIcon } from './icons'
import { theme } from './theme'
import { cleanNPM, cleanURL, numberWithCommas } from './utils'
import { PackageInfo } from '../services/packageIndo'

const Wrapper = styled(Element)`
  background: ${theme.colors.grays[700]};
  border-radius: ${theme.radii.medium}px;
  border: 1px solid ${theme.colors.grays[600]};
  position: sticky;
  top: 20px;
  padding: 2rem;
  grid-area: aside;
  height: min-content;
  overflow: hidden;
`

const MaxWithLink = styled(Link)<{ title: string }>`
  max-width: 100%;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

const LinkWrapper = styled(Stack)`
  svg {
    flex-basis: 13px;
    flex-shrink: 0;
  }
`

const getInfo = async (name: string) => {
  const data = await fetch(
    `https://api.npms.io/v2/package/${name
      .replace(/\//g, '%2F')
      .replace(/@/g, '%40')}`
  ).then((rsp) => rsp.json())

  return data.collected
}

const getSize = async (name: string) => {
  const data = await fetch(
    `https://bundlephobia.com/api/size?package=${name}`
  ).then((rsp) => rsp.json())

  return data
}

const Sidebar: React.FC<{ packageInfo: PackageInfo }> = ({ packageInfo }) => {
  const { info, size } = packageInfo

  const downloads = info?.npm?.downloads ?? 0
  const links = info?.metadata?.links || {}

  if (!info || !size) return null

  return info.metadata ? (
    <Wrapper as="aside">
      <Text block weight="bold" size={19}>
        About
      </Text>
      <Text
        variant="muted"
        block
        marginTop={2}
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        {info.metadata.description}
      </Text>
      {downloads && (
        <>
          <Text block weight="bold" size={19} marginTop={9}>
            {numberWithCommas(downloads[1].count)}
          </Text>
          <Text variant="muted" block marginTop={1}>
            Weekly Downloads
          </Text>
        </>
      )}
      <Element
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderTop: '1px solid' + theme.colors.grays[600]
        }}
        marginTop={28}
        paddingTop={4}
      >
        <Element>
          <Text block variant="muted">
            Latest version
          </Text>
          <Text block paddingTop={1}>
            {info.metadata.version}
          </Text>
        </Element>
        <Element>
          <Text block variant="muted">
            License
          </Text>
          <Text block paddingTop={1}>
            {info.metadata.license}
          </Text>
        </Element>
      </Element>
      <Element
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr'
        }}
        paddingTop={4}
      >
        {size && (
          <Element>
            <Text block variant="muted">
              Size
            </Text>
            <Text block paddingTop={1}>
              {size.size / 1000}Kb
            </Text>
          </Element>
        )}
        {info.npm && (
          <Element>
            <Text block variant="muted">
              Packages Using it
            </Text>
            <Text block paddingTop={1}>
              {info.npm.dependentsCount}
            </Text>
          </Element>
        )}
      </Element>
      {info.github && (
        <Element
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
          }}
          paddingTop={4}
        >
          <Element>
            <Text block variant="muted">
              Issues Count
            </Text>
            <Text block paddingTop={1}>
              {info.github.issues.count}
            </Text>
          </Element>
          <Element>
            <Text block variant="muted">
              Stars
            </Text>
            <Text block paddingTop={1}>
              {info.github.starsCount}
            </Text>
          </Element>
        </Element>
      )}
      <Text
        css={{ borderTop: '1px solid' + theme.colors.grays[600] }}
        marginTop={28}
        paddingTop={4}
        block
        weight="bold"
      >
        External Links
      </Text>

      {links.homepage && (
        <LinkWrapper align="center" gap={2} marginTop={4}>
          <GlobeIcon> </GlobeIcon>
          <MaxWithLink href={links.homepage} title={links.homepage}>
            {cleanURL(links.homepage)}
          </MaxWithLink>
        </LinkWrapper>
      )}
      {links.repository && (
        <LinkWrapper align="center" gap={2} marginTop={4}>
          <GHIcon></GHIcon>
          <MaxWithLink href={links.repository} title={links.repository}>
            {cleanURL(links.repository)}
          </MaxWithLink>
        </LinkWrapper>
      )}
      {links.bugs && (
        <LinkWrapper align="center" gap={2} marginTop={4}>
          <IssuesIcon></IssuesIcon>
          <MaxWithLink href={links.bugs} title={links.bugs}>
            {cleanURL(links.bugs)}
          </MaxWithLink>
        </LinkWrapper>
      )}
      {links.npm && (
        <LinkWrapper align="center" gap={2} marginTop={4}>
          <NPMIcon></NPMIcon>
          <MaxWithLink href={links.npm} title={links.npm}>
            @{cleanNPM(links.npm)}
          </MaxWithLink>
        </LinkWrapper>
      )}
      {info.metadata.maintainers && (
        <>
          <Text
            block
            css={{ borderTop: '1px solid' + theme.colors.grays[600] }}
            marginTop={28}
            paddingTop={4}
            weight="bold"
          >
            Collaborators
          </Text>
          <Stack
            marginTop={16}
            css={{
              flexWrap: 'wrap',

              img: {
                marginBottom: 8
              }
            }}
            gap={2}
          >
            {info.metadata.maintainers.map((maintainer) => (
              <Link
                key={maintainer.username}
                href={`https://github.com/${maintainer.username}`}
              >
                <Element
                  key={maintainer.username}
                  as="img"
                  css={{
                    display: 'block',
                    width: 32,
                    height: 32,
                    overflow: 'hidden',
                    background: 'white',
                    'border-radius': theme.radii.small + 'px',
                    border: '1px solid' + theme.colors.grays[600]
                  }}
                  src={`https://github.com/${maintainer.username}.png?size=40`}
                  alt={maintainer.username}
                  title={maintainer.username}
                  width="32"
                  height="32"
                />
              </Link>
            ))}
          </Stack>
        </>
      )}
    </Wrapper>
  ) : (
    <Wrapper as="aside" paddingX={16} paddingY={24}></Wrapper>
  )
}

export default Sidebar
