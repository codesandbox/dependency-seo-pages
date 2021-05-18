import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import { searchDependency } from '../services/algolia'
import SEO from '../components/seo'
import Main from '../components/main'
import { getPackageInfo, PackageInfo } from '../services/packageIndo'

const HomePage: React.FC<{
  sandboxes?: any[]
  packageName?: string
  hasMoreToLoad?: boolean
  packageInfo?: PackageInfo
}> = ({ sandboxes, packageName, packageInfo, hasMoreToLoad }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <SEO pkg={packageName} title={`${packageName} examples - CodeSandbox`} />
      <Main
        packageName={packageName}
        packageInfo={packageInfo}
        sandboxes={sandboxes}
        hasMoreToLoad={hasMoreToLoad}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params

  // No valid slug
  if (!Array.isArray(slug) || !slug[1]) {
    return { notFound: true }
  }

  const [_, packageName] = slug
  const { sandboxes, hasMoreToLoad } = await searchDependency(packageName)
  const packageInfo = await getPackageInfo(packageName)

  // No data
  if (!packageInfo.info || !sandboxes) {
    return { notFound: true }
  }

  return {
    props: { sandboxes, packageName, hasMoreToLoad, packageInfo },
    revalidate: 6.048e8 // 1 week
  }
}

export default HomePage
