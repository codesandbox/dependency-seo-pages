import { TemplateType } from '@codesandbox/common/lib/templates'
import algoliaSearch from 'algoliasearch'

const MAX_HITS = 24
const APP_ID = process.env.ALGOLIA_APP_ID
const SEARCH_KEY = process.env.ALGOLIA_SEARCH_KEY
const SEARCH_INDEX = 'prod_sandboxes'

const client = algoliaSearch(APP_ID, SEARCH_KEY)
const algoliaIndex = client.initIndex(SEARCH_INDEX)

export type Sandboxes = {
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

export const searchDependency = async (
  packageName: string
): Promise<
  | {
      sandboxes: Sandboxes
      hasMoreToLoad: boolean
    }
  | undefined
> => {
  const data = await algoliaIndex.search('', {
    facetFilters: [`npm_dependencies.dependency:${packageName}`],
    hitsPerPage: MAX_HITS + 1
  })

  return {
    sandboxes: data.hits.slice(0, MAX_HITS),
    hasMoreToLoad: data.hits.length > MAX_HITS
  }
}
