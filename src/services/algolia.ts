import algoliaSearch from 'algoliasearch'

const MAX_HITS = 12
const APP_ID = process.env.ALGOLIA_APP_ID
const SEARCH_KEY = process.env.ALGOLIA_SEARCH_KEY
const SEARCH_INDEX = 'prod_sandboxes'

const client = algoliaSearch(APP_ID, SEARCH_KEY)
const algoliaIndex = client.initIndex(SEARCH_INDEX)

export const searchDependency = async (
  packageName: string
): Promise<{
  sandboxes: any[]
  hasMoreToLoad: boolean
}> => {
  const data = await algoliaIndex.search('', {
    facetFilters: [`npm_dependencies.dependency:${packageName}`],
    hitsPerPage: 13
  })

  return {
    sandboxes: data.hits.slice(0, MAX_HITS),
    hasMoreToLoad: data.hits.length > MAX_HITS
  }
}
