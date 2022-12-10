

const setupTags = recipes => {
    const allTags = {}
//check if the tag is exist, if exist, amount +1, if not exist, amount should be 1
    recipes.forEach(recipe => {
        recipe.content.tags.forEach(tag => {
            if(allTags[tag]) {
                allTags[tag] = allTags[tag] + 1
            } else {
                allTags[tag] = 1
            }
        })
    })
    //object method will return a property and value in the array, sort help access every item on it, for this, only new tag produce
    const newTags = Object.entries(allTags).sort((a,b)=>{
        const [firstTag] = a
        const [secondTag] = b
        return firstTag.localeCompare(secondTag)
    })
    console.log(newTags)
    
  return newTags
}

export default setupTags