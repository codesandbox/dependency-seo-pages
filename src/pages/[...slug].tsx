import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import { searchDependency } from '../services/algolia'
import SEO from '../components/seo'

const HomePage: React.FC<{ sandboxes?: any[]; dependency?: string }> = ({
  sandboxes,
  dependency
}) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <SEO pkg={dependency} title={`${dependency} examples - CodeSandbox`} />
      <div>
        {dependency}
        {sandboxes?.map((e) => (
          <p>{e.title}</p>
        ))}
      </div>
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
  const sandboxes = await searchDependency(dependency)

  return {
    props: { sandboxes, dependency },
    revalidate: 6.048e8 // 1 week
  }
}

export default HomePage
