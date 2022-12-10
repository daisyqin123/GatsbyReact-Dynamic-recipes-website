import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
    query firstQuery{
        site {
            buildTime
            info: siteMetadata {
            author
            complexData {
                age
                name
            }
            description
            person {
                age
                name
            }
            simpleData
            title
            }
        }
    }
`
//option1
// const FetchData1 =() =>{
//     const data = useStaticQuery(getData);
//   return (
//     <div>
//         <h1>{data.site.info.person.name}</h1>
//     </div>
//   )
// }
//option2
const FetchData1 =() =>{
    const {
        site: {
            info: {title},
        }
    } = useStaticQuery(getData);
  return (
    <div>
        <h1>site title is : {title}</h1>
    </div>
  )
}

export default FetchData1