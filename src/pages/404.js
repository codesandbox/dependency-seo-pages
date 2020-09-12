import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/main'
import { Text } from '@codesandbox/components'
import algoliasearch from 'algoliasearch'

const client = algoliasearch('ZACZHDBO7S', process.env.GATSBY_READ_KEY)
const index = client.initIndex('prod_sandboxes')

const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const NotFoundPage = props => {
  const pkg = props.location.pathname.split('/package/')[1]
  const [dependency, setDependency] = useState({
    dependency: pkg,
    sandboxes: []
  })
  const [error, setError] = useState(false)
  const name = (pkg || '')
    .split('-')
    .map(a => capitalize(a))
    .join(' ')

  useEffect(() => {
    index
      .search('', {
        facetFilters: [`npm_dependencies.dependency:${pkg}`],
        hitsPerPage: 13
      })
      .then(({ hits }) => {
        console.log(hits)
        if (!hits.length) setError(true)
        setDependency({
          dependency: pkg,
          sandboxes: hits
        })
      })
  }, [])

  if (error) {
    return (
      <Layout notFound>
        <SEO title={`${name} examples - CodeSandbox`} pkg={name} />
        <Text block align="center" size={40} weight="400" as="h1">
          Not found
        </Text>
        <Text block align="center" weight="400" as="h2">
          No sandboxes were found for {pkg}
        </Text>
      </Layout>
    )
  }

  if (dependency.sandboxes.length) {
    return (
      <Layout>
        <SEO title={`${name} examples - CodeSandbox`} pkg={name} />
        <Main name={name} dependency={dependency} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title={`${name} examples - CodeSandbox`} pkg={name} />
    </Layout>
  )
}

export default NotFoundPage
