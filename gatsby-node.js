const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const dependencyTemplate = path.resolve('src/templates/dependency.js')
  return graphql(`
    query MyQuery {
      allSandboxDependency {
        edges {
          node {
            dependency
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    console.log(
      'Creating pages: ' + result.data.allSandboxDependency.edges.length
    )
    // Create dependency pages.
    result.data.allSandboxDependency.edges.forEach(edge => {
      createPage({
        path: `package/${edge.node.dependency}`,
        component: dependencyTemplate,
        context: {
          dependency: edge.node.dependency
        }
      })
    })
  })
}
