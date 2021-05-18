import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import { searchDependency } from '../services/algolia'
import SEO from '../components/seo'
import Main from '../components/main'

const HomePage: React.FC<{
  sandboxes?: any[]
  dependency?: string
  hasMoreToLoad: boolean
}> = ({ sandboxes, dependency, hasMoreToLoad }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <SEO pkg={dependency} title={`${dependency} examples - CodeSandbox`} />
      <Main
        dependency={dependency}
        sandboxes={sandboxes}
        hasMoreToLoad={hasMoreToLoad}
      />
      {/* <div>
        {dependency}
        {sandboxes?.map((e) => (
          <p>{e.title}</p>
        ))}
      </div> */}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params

  if (!Array.isArray(slug) || !slug[1]) {
    return { notFound: true }
  }

  const [_, dependency] = slug
  const { sandboxes, hasMoreToLoad } = await searchDependency(dependency)

  return {
    props: { sandboxes, dependency, hasMoreToLoad },
    revalidate: 6.048e8 // 1 week
  }
}

export default HomePage
