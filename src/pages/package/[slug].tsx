import { GetServerSideProps } from 'next'

import { searchDependency } from '../../services/algolia'
import SEO from '../../components/seo'
import Main from '../../components/main'
import { getPackageInfo, PackageInfo } from '../../services/packageInfo'

const HomePage: React.FC<{
  sandboxes?: any[]
  packageName?: string
  hasMoreToLoad?: boolean
  packageInfo?: PackageInfo
}> = ({ sandboxes, packageName, packageInfo, hasMoreToLoad }) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug: packageName } = context.params

  // No valid slug
  if (Array.isArray(packageName) || !packageName) {
    return { notFound: true }
  }

  const { sandboxes, hasMoreToLoad } = await searchDependency(packageName)
  const packageInfo = await getPackageInfo(packageName)

  // No data
  if (!sandboxes) {
    return { notFound: true }
  }

  return {
    props: { sandboxes, packageName, hasMoreToLoad, packageInfo }
  }
}

export default HomePage
