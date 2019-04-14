import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
import Categories from '../components/Listing/Categories'
import website from '../../config/website'


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
      <div class="container blog-page-container">
			<div class="row">
				<div id="blog-section" class="col-md-8 blog-section">

					{/* Post Box*/}
					<div class="row post-box">
						<div class="col-sm-2">
							<div class="publish-date">
								<p class="day">12</p>
								<p class="month-year"><time datetime="2014-05-12">May 2014 </time></p>
							</div>{/* /.publish-date */}

							<div class="post-category">
								<span><i class="fa fa-picture-o"></i></span>
							</div>{/* /.post-category */}

						</div>{/* /.col-sm-2 */}

						<div class="col-sm-10">
							<article class="post-content">
								<figure class="featured-image">
									<img src="images/post-image/01.jpg" alt="featured image" />
								</figure>
								
								<h2 class="post-title">
									<a href="#">{data.title.text}</a>
								</h2>

								<p class="post-meta">
									Posted by <a class="post-meta-element" href="#">Kim Nilson</a> | 
									With <a class="comments" href="#comments">230 Comments</a> |
									In <a href="#" class="categorys">Charity</a>
								</p>
								<p>
									<strong>Contrary to popular belief, Lorem Ipsum is not simply random text. It roots in  piece to classical of Latin literature from 45 BC, making it over 2000 years old.</strong>
								</p>
								<p>
									Richard McClintock a Latin professor at Hampden-Sydney College in the Virginia, looked up one more obscure Latin words, consectetur, from  Lorem Ipsum passage, and going to a through the cites of the word in a classical literature, discovered the source. 
								</p>
								<h3>Lorem Ipsum comes from section</h3>
								<p>
									Lorem Ipsum comes from section 1.10.32 and 1.10.33 of " Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
								</p>
								<blockquote>Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra</blockquote> 
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, dolorum, fugiat, eligendi magni 
									quibusdam iure cupiditate ex voluptas unde voluptatibus quos expedita autem qui vitae corrupti exercitationem 
									facilis nihil atque! 
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, dolorum, fugiat, eligendi magni 
									quibusdam iure cupiditate ex voluptas unde voluptatibus quos expedita autem qui vitae corrupti exercitationem 
									facilis nihil atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, dolorum, fugiat, eligendi magni 
									quibusdam iure cupiditate ex voluptas unde voluptatibus quos expedita autem qui vitae corrupti exercitationem 
								</p>
								<h4>Lorem ipsum dolor sit amet</h4>
								<p>
									facilis nihil atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, dolorum, fugiat, eligendi magni 
									quibusdam iure cupiditate ex voluptas unde voluptatibus quos expedita autem qui vitae corrupti exercitationem 
									facilis nihil atque! 
								</p>
							</article> {/* /.post-content */}
						</div>{/* /.col-sm-10 */}
					</div>{/* /#post-box */}{/* /.row */}
					{/* Post Box End */}
					<hr />

					
				</div>{/* /#blog-section */}	


				<aside id="blog-sidebar" class="col-md-4 blog-sidebar">
					<div class="widget clearfix">
						<h3 class="title">
							Top Categories
						</h3>

						<ul class="widget-content">
							<li><a href="#" >ALL</a></li>
							<li><a href="#" >CHARITY</a></li>
							<li><a href="#" >NATURE</a></li>
							<li><a href="#" >WILDLIFE</a></li>
							<li><a href="#" >CHILDREN</a></li>
						</ul>{/* /.widget-content */}
					</div>{/* /.widget */}



			


				</aside>{/* /#blog-sidebar */}		
			</div> {/* /.row */}
		</div>{/* /.container */}



		{/* Scroll to Top */}
		<div id="scroll-to-top">
			<div class="hex scroll-top">
				<span><i class="fa fa-chevron-up"></i></span>
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
          ... on PrismicPostBodyCodeBlock {
            slice_type
            id
            primary {
              code_block {
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
