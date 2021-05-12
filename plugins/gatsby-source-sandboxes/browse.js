const { encode } = require('@algolia/client-common')
const { MethodEnum } = require('@algolia/requester-common')
const { createBrowsablePromise } = require('@algolia/client-search')

const customBrowse = base => {
  return ({ limit, ...requestOptions }) => {
    console.log('limit: ' + limit)
    return createBrowsablePromise({
      ...requestOptions,
      shouldStop: response => {
        return (
          response.cursor === undefined ||
          (response.page + 1) * response.hitsPerPage >= limit
        )
      },
      request: data =>
        base.transporter.read(
          {
            method: MethodEnum.Post,
            path: encode('1/indexes/%s/browse', base.indexName),
            data
          },
          requestOptions
        )
    })
  }
}

module.exports = customBrowse
