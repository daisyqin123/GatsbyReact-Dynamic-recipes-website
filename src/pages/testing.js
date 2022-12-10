import React from 'react'

import Layout from '../components/Layout'
import Gallery from '../examples/Gallery'

const Testing = ()=> {
   
    
  return (
    <Layout>
      {/* main classname=page make sure botton always at the bottom */}
      <main className="page">
      <Gallery/>
      </main>
    </Layout>
  )
}



export default Testing


// const Testing = ({data})=> {
//     const author = data.site.info.author
    
//   return (
//     <div>author: {author}</div>
//   )
// }

// export const data = graphql`
// {
//     site {
//             buildTime
//             info: siteMetadata {
//             author
//             complexData {
//                 age
//                 name
//             }
//             description
//             person {
//                 age
//                 name
//             }
//             simpleData
//             title
//             }
//         }
// }
// ` 

// export default Testing

