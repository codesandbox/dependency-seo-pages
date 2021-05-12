const crypto = require('crypto')
const algoliasearch = require('algoliasearch')
var uniqid = require('uniqid')
const { addMethods } = require('@algolia/client-common')
const customBrowse = require('./browse')

exports.sourceNodes = async ({ actions }, configOptions) => {
  const { createNode } = actions

  const index = addMethods(
    algoliasearch('5O7BRBEIVD', configOptions.apiKey).initIndex(
      configOptions.index
    ),
    { customBrowse }
  )

  function getEverything() {
    const hits = []
    return index
      .customBrowse({
        limit: '6000',
        batch(batch) {
          console.log('getting sandboxes')
          hits.push(...batch)
        }
      })
      .then(() => hits)
  }

  const hits = await getEverything()
  console.log('getting info')

  const npmDeps = hits.reduce((accumulator, currentValue) => {
    currentValue.npm_dependencies.map(dep => {
      const found = accumulator.find(a => a.dependency === dep.dependency)

      if (found) {
        if (found.sandboxes.length > 12) return accumulator
        found.sandboxes.push(currentValue)
        return accumulator
      } else {
        accumulator.push({
          dependency: dep.dependency,
          sandboxes: [currentValue]
        })
        return accumulator
      }
    })

    return accumulator
  }, [])

  console.log('creating data')
  console.log('npmDeps size: ' + npmDeps.length)
  npmDeps.forEach(datum =>
    createNode({
      ...datum,
      id: uniqid(),
      parent: null,
      children: [],
      internal: {
        type: 'SandboxDependency',
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(datum))
          .digest('hex')
      }
    })
  )
  // We're done, return.
}
