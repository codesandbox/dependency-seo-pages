export const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const getScreenshot = (id: string) =>
  `https://codesandbox.io/api/v1/sandboxes/${id}/screenshot.png`

export const getUrlLoadMore = (id: string) =>
  `https://codesandbox.io/search?refinementList%5Btemplate%5D=&refinementList%5Bnpm_dependencies.dependency%5D%5B0%5D=${id}&page=2&configure%5BhitsPerPage%5D=12`

export const getUrlAuthor = (id: string) => `https://codesandbox.io/u/${id}`

export const getUrlSandbox = (id: string) => `https://codesandbox.io/s/${id}`

export const cleanURL = (url: string) => url.split('https://')[1]

export const cleanNPM = (url: string) =>
  url
    .split('https://www.npmjs.com/package/')[1]
    .replace(/%2F/g, '/')
    .replace(/%40/g, '')

export const numberWithCommas = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
