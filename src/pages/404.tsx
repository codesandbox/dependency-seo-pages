import React from 'react'
import { useRouter } from 'next/router'

import { Text } from '@codesandbox/components'

import SEO from '../components/seo'
import { capitalize } from '../components/utils'

const NotFoundPage = () => {
  const router = useRouter()

  const queryName = Array.isArray(router.query.slug)
    ? router.query.slug[router.query.slug.length - 1]
    : router.query.slug

  const name = queryName
    .split('-')
    .map((a) => capitalize(a))
    .join(' ')

  return (
    <>
      <div>
        <SEO title={`${name} examples - CodeSandbox`} pkg={name} />
        <Text block align="center" size={40} weight="400" as="h1">
          Not found
        </Text>
        <Text block align="center" weight="400" as="h2">
          No sandboxes were found for {queryName}.
        </Text>
      </div>
    </>
  )
}

export default NotFoundPage
