const cleanNPM = (url: string) =>
  url
    .split('https://www.npmjs.com/package/')[1]
    .replace(/%2F/g, '/')
    .replace(/%40/g, '')

interface Info {
  metadata?: {
    description?: string
    version?: string
    license?: string
    dependentsCount?: number
    maintainers?: { username: string }[]
    links?: {
      homepage?: string
      repository?: string
      bugs?: string
      npm?: string
    }
  }
  npm?: {
    downloads?: { count: number }[]
    dependentsCount: number
  }
  github?: {
    issues?: {
      count?: string
    }
    starsCount?: string
  }
}

const getNpmData = async (name: string): Promise<Info> => {
  const data = await fetch(
    `https://api.npms.io/v2/package/${name
      .replace(/\//g, '%2F')
      .replace(/@/g, '%40')}`
  ).then((rsp) => rsp.json())

  return data.collected
}

const getSize = async (name: string): Promise<number> => {
  const data = await fetch(
    `https://bundlephobia.com/api/size?package=${name}`
  ).then((rsp) => rsp.json())

  return data
}

export interface PackageInfo {
  size: number
  info: Info
}

export const getPackageInfo = async (
  packageName: string
): Promise<PackageInfo> => {
  const info = await getNpmData(packageName)
  const size = await getSize(packageName)

  return { info, size }
}
