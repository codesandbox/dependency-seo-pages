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
