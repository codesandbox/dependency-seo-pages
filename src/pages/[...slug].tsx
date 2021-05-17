import { GetStaticProps, GetStaticPaths } from 'next'
import { searchDependency } from '../services/algolia'

const HomePage: React.FC<{ sandboxes?: any[]; dependency?: string }> = ({
  sandboxes,
  dependency
}) => {
  return (
    <div>
      {dependency}
      {sandboxes?.map((e) => (
        <p>{e.title}</p>
      ))}
    </div>
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
