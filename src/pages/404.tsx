import React from 'react'

import { Text } from '@codesandbox/components'

import SEO from '../components/seo'

const NotFoundPage = () => {
  return (
    <>
      <div>
        <SEO title={`Not found - CodeSandbox`} pkg="Not found" />
        <Text block align="center" size={40} weight="400" as="h1">
          Not found
        </Text>
        <Text block align="center" weight="400" as="h2">
          No sandboxes were found.
        </Text>
      </div>
    </>
  )
}

export default NotFoundPage
