import React from 'react'
import Head from 'next/head'

const SEO: React.FC<{ title: string; pkg: string }> = ({ title, pkg }) => {
  const description = `Learn how to use ${pkg} by viewing and forking ${pkg} example apps on CodeSandbox`

  return (
    <Head>
      <html lang="en-en" />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta itemProp="description" content={description} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="CodeSandbox" />

      <link
        rel="canonical"
        href={`https://codesandbox.io/examples/package/${pkg}`}
      />
    </Head>
  )
}

export default SEO
