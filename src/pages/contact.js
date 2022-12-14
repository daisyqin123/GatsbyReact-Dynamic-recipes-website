import React from 'react'
import Layout from '../components/Layout'
import {Link, graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'

const Contact = ({data}) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
    
     <Layout>
      
        <main className="page">
          <section className="contact-page">
            <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>
              Cardigan prism bicycle rights put a bird on it deep v.
            </p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
            </article>

            <article>
             
              <form className="form contact-form">
                
                <div className="form-row">
                  <lable htmlFor="name">your name</lable>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                  <lable htmlFor="email">your email</lable>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="form-row">
                  <lable htmlFor="message">your email</lable>
                  <input type="message" name="message" id="message" />
                </div>
                <button type="submit" className="btn block">
                  submit
                </button>

              </form>
            </article>
           
          </section>
          <section className="featured-recipes">
            <h5>Look at this Awesomesource!</h5>
            <RecipesList recipes={recipes}/>
          </section>
        </main>
        
      
      
    </Layout>
    
  )
}


export const query = graphql`
   {
    allContentfulRecipe(filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact