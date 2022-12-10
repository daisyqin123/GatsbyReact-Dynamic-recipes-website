
//have my qury, get result and then iterate over those notes, then for every item will create a new page
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

//   console.log("#######")
  
//   console.log(result)
  
//   console.log("#######")

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      
      createPage({
        //should be match with /tagLists
        path: `/${tag}`,
        component: path.resolve(`src/templates/tag-template.js`),//since we are in a node file, we need to provide a proper path
        context: {
          tag: tag,
        },//set a key value to pair, firstone is the name for my variable, second one will be the value
      })
    })
  })
}
