import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import website from '../../config/website'
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
import Img from 'gatsby-image'

class Stiri extends Component {
	render() {
		
    const { data } = this.props
		let items = []
		let itemsli = []
		for (const [index, edge] of data.posts.edges.entries()) {
      const item = edge.node.data
      console.log(item)
			const link = '/' + edge.node.uid
			items.push(
                 <div className="row post-box" key={index}>
                 <div className="col-sm-2">
                   {/* <div className="publish-date">
                   <p className="month-year">{item.date} </p>
                   </div> */}
 
                 </div>{/*/.col-sm-2 */}
 
                 <div className="col-sm-10">
                   <article className="post-content">
 
                     <div id="blog-gallery" className="carousel slide" data-ride="carousel">
                     <Img fluid={item.coverimage.localFile.childImageSharp.fluid} />
                     </div>
 
                     <h2 className="post-title">
                       <a href={link}>{item.title.text}</a>
                     </h2>
 
                    
 
                     <p>
                     {item.description}
                         </p>
 
                         <a href={link} className="btn custom-btn angle-effect">Mai mult</a>
 
                   </article> {/*/.post-content */}
                 </div>{/*/.col-sm-10 */}
               </div>
            )
            }
        return (
            <Layout customSEO>
              <SEO
                title={`${website.title} | ${website.titleAlt}`}
                // pathname={location.pathname}
                desc={website.description}
              />
              <React.Fragment>
                <div className="container blog-page-container">
                  <div className="row">
                    <div id="blog-section" className="blog-section col-md-8">
                     
        
                        {items}
        
        
        
                    </div>{/*/#blog-section */}
        
        
                   
                  </div> {/*/.row */}
                </div>{/*/.container */}
        
        
        
                {/*Scroll to Top */}
                <div id="scroll-to-top">
                  <div className="hex scroll-top">
                    <span><i className="fa fa-chevron-up"></i></span>
                  </div>
                </div>{/*/#scroll-to-top */}
                {/*Scroll to Top End*/}
        
              </React.Fragment>
            </Layout>
          )
	}
}

export default Stiri

Stiri.propTypes = {
	data: PropTypes.shape({
		posts: PropTypes.object.isRequired
	}).isRequired,
}

export const pageQuery = graphql`
  query StiriQuery {
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
			}
			coverimage {
				localFile {
				  childImageSharp {
					fluid(maxWidth: 1200, quality: 90) {
					  ...GatsbyImageSharpFluid_withWebp
					}
				  }
				}
			  }
			description
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
		}
  }
`
