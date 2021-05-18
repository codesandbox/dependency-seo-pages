import React from 'react'
import Helmet from 'react-helmet'

function SEO({ title, pkg }) {
  return (
    <Helmet
      htmlAttributes="en-en"
      title={title}
      meta={[
        {
          name: 'description',
          content: `Learn how to use ${pkg} by viewing and forking ${pkg} example apps on
        CodeSandbox`
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: `Learn how to use ${pkg} by viewing and forking ${pkg} example apps on
        CodeSandbox`
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: 'CodeSandbox'
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: `Learn how to use ${pkg} by viewing and forking ${pkg} example apps on
        CodeSandbox`
        }
      ]}
    />
  )
}

export default SEO
