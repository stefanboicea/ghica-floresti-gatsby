import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
import Categories from '../components/Listing/Categories'
import website from '../../config/website'
import Img from 'gatsby-image'


const PostWrapper = Wrapper.withComponent('main')

const Post = ({ data: { prismicPost, posts }, location }) => {
  const { data } = prismicPost
  let categories = false
  if (data.categories[0].category) {
    categories = data.categories.map(c => c.category.document[0].data.name)
  }
  return (
    <Layout customSEO>
      <SEO
        title={`${data.title.text} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={data.description}
        node={prismicPost}
        article
      />
      <React.Fragment>
      <div className="container blog-page-container">
			<div className="row">
				<div id="blog-section" className="col-md-8 blog-section">

					{/* Post Box*/}
					<div className="row post-box">
						<div className="col-sm-2">
							<div className="publish-date">
								{/* <p className="day">12</p> */}
								<p className="month-year">{data.date} </p>
							</div>{/* /.publish-date */}

							{/* <div className="post-category">
								<span><i className="fa fa-picture-o"></i></span>
							</div> */}

						</div>{/* /.col-sm-2 */}

						<div className="col-sm-10">
							<article className="post-content">
								<figure className="featured-image">
                <Img fluid={data.coverimage.localFile.childImageSharp.fluid} />
								</figure>
								
								<h2 className="post-title">
									<a href="#">{data.title.text}</a>
								</h2>

								{/* <p className="post-meta">
									Posted by <a className="post-meta-element" href="#">Kim Nilson</a> | 
									With <a className="comments" href="#comments">230 Comments</a> |
									In <a href="#" className="categorys">Charity</a>
								</p> */}
								<p>
									<strong>{data.description}</strong>
								</p>
                <SliceZone allSlices={data.body} />
							</article> {/* /.post-content */}
						</div>{/* /.col-sm-10 */}
					</div>{/* /#post-box */}{/* /.row */}
					{/* Post Box End */}
					<hr />

					
				</div>{/* /#blog-section */}	


				<aside id="blog-sidebar" className="col-md-4 blog-sidebar">
					<div className="widget clearfix">
						<h3 className="title">
							Categorii
						</h3>

						<ul className="widget-content">
            <Categories categories={categories} />
						</ul>{/* /.widget-content */}
					</div>{/* /.widget */}



			


				</aside>{/* /#blog-sidebar */}		
			</div> {/* /.row */}
		</div>{/* /.container */}



		{/* Scroll to Top */}
		<div id="scroll-to-top">
			<div className="hex scroll-top">
				<span><i className="fa fa-chevron-up"></i></span>
			</div>
		</div>{/* /#scroll-to-top */}
		{/* Scroll to Top End*/}
      </React.Fragment>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
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
        date(formatString: "MMMM Do, YYYY")
        categories {
          category {
            document {
              data {
                name
              }
            }
          }
        }
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
       
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    posts: allPrismicPost(limit: 2, sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
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
