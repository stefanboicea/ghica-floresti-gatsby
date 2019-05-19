import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
import Categories from '../components/Listing/Categories'
import website from '../../config/website'


const AllPosts = ({ data: { prismicPost, posts }, location }) => {
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
            <div id="blog-section" class="blog-section col-md-8">
              {/*Post Box */}
              <div class="row post-box">
                <div class="col-sm-2">
                  <div class="publish-date">
                    <p class="day">12</p>
                    <p class="month-year"><time datetime="2014-05-12">May 2014 </time></p>
                  </div>{/*/.publish-date */}

                  <div class="post-category">
                    <span><i class="fa fa-picture-o"></i></span>
                  </div>{/*/.post-category */}
                </div>{/*/.col-sm-2 */}

                <div class="col-sm-10">
                  <article class="post-content">

                    <div id="blog-gallery" class="carousel slide" data-ride="carousel">
                      {/*Indicators */}
                      <ol class="carousel-indicators">
                        <li data-target="#blog-gallery" data-slide-to="0" class="active"></li>
                        <li data-target="#blog-gallery" data-slide-to="1"></li>
                        <li data-target="#blog-gallery" data-slide-to="2"></li>
                      </ol>

                      {/*Wrapper for slides */}
                      <div class="carousel-inner">
                        <div class="item active">
                          <img src="images/post-image/01.jpg" alt="carosuel image" />
                        </div>
                        <div class="item">
                          <img src="images/post-image/02.jpg" alt="carosuel image" />
                        </div>
                        <div class="item">
                          <img src="images/post-image/03.jpg" alt="carosuel image" />
                        </div>

                      </div>
                    </div>

                    <h2 class="post-title">
                      <a href="blog-single.html">Proin gravida nibh vel velit auctor</a>
                    </h2>

                    <p class="post-meta">
                      Posted by <a class="post-meta-element" href="#">Kim Nilson</a>
                      In <a href="#" class="categorys">Child</a>
                      With <a class="comments" href="#comments">230 Comments</a>
                    </p>

                    <p>
                      Richard McClintock a Latin professor at Hampden-Sydney College in the Virginia, looked up one more obscure Latin words, consectetur, from  Lorem Ipsum passage, and going to a through the cites of the word in a classical literature, discovered the source.
                        </p>

                    <a class="btn custom-btn angle-effect" href="#">Read More</a>

                  </article> {/*/.post-content */}
                </div>{/*/.col-sm-10 */}
              </div>{/*/#post-box */}{/*/.row */}
              {/*Post Box End*/}




              {/*Post Box */}
              <div class="row post-box format-standard">
                <div class="col-sm-2">
                  <div class="publish-date">
                    <p class="day">12</p>
                    <p class="month-year"><time datetime="2014-05-12">May 2014 </time></p>
                  </div>{/*/.publish-date */}

                  <div class="post-category">
                    <span><i class="fa fa-pencil"></i></span>
                  </div>{/*/.post-category */}

                </div>{/*/.col-sm-2 */}

                <div class="col-sm-10">
                  <article class="post-content">

                    <h2 class="post-title">
                      <a href="blog-single.html">Proin gravida nibh vel velit auctor</a>
                    </h2>

                    <p class="post-meta">
                      Posted by <a class="post-meta-element" href="#">Kim Nilson</a>
                      In <a href="#" class="categorys">Child</a>
                      With <a class="comments" href="#comments">230 Comments</a>
                    </p>
                    <p>
                      Richard McClintock a Latin professor at Hampden-Sydney College in the Virginia, looked up one more obscure Latin words, consectetur, from  Lorem Ipsum passage, and going to a through the cites of the word in a classical literature, discovered the source.
                        </p>

                    <a class="btn custom-btn angle-effect" href="#">Read More</a>

                  </article> {/*/.post-content */}
                </div>{/*/.col-sm-10 */}
              </div>{/*/#post-box */}{/*/.row */}
              {/*Post Box End*/}




              {/*Post Box */}
              <div class="row post-box">
                <div class="col-sm-2">
                  <div class="publish-date">
                    <p class="day">12</p>
                    <p class="month-year"><time datetime="2014-05-12">May 2014 </time></p>
                  </div>{/*/.publish-date */}

                  <div class="post-category">
                    <span><i class="fa fa-picture-o"></i></span>
                  </div>{/*/.post-category */}

                </div>{/*/.col-sm-2 */}

                <div class="col-sm-10">
                  <article class="post-content">
                    <figure class="featured-image">
                      <img src="images/post-image/02.jpg" alt="featured image" />
                    </figure>

                    <h2 class="post-title">
                      <a href="blog-single.html">Proin gravida nibh vel velit auctor</a>
                    </h2>

                    <p class="post-meta">
                      Posted by <a class="post-meta-element" href="#">Kim Nilson</a>
                      In <a href="#" class="categorys">Child</a>
                      With <a class="comments" href="#comments">230 Comments</a>
                    </p>
                    <p>
                      Richard McClintock a Latin professor at Hampden-Sydney College in the Virginia, looked up one more obscure Latin words, consectetur, from  Lorem Ipsum passage, and going to a through the cites of the word in a classical literature, discovered the source.
                        </p>

                    <a class="btn custom-btn angle-effect" href="#">Read More</a>

                  </article> {/*/.post-content */}
                </div>{/*/.col-sm-10 */}
              </div>{/*/#post-box */}{/*/.row */}
              {/*Post Box End*/}





              {/*Post Box */}
              <div class="row post-box">
                <div class="col-sm-2">
                  <div class="publish-date">
                    <p class="day">12</p>
                    <p class="month-year"><time datetime="2014-05-12">May 2014 </time></p>
                  </div>{/*/.publish-date */}

                  <div class="post-category">
                    <span><i class="fa fa-quote-right"></i></span>
                  </div>{/*/.post-category */}

                </div>{/*/.col-sm-2 */}

                <div class="col-sm-10">
                  <article class="post-content">
                    <blockquote class="post-blockquote">In the design process, my gut
                        instinct is my best critic. I just wished I would always  listen to it!
                            <span class="quot-author"> -  Bryan Tamayo</span>
                    </blockquote>

                    <h2 class="post-title">
                      <a href="blog-single.html">Proin gravida nibh vel velit auctor</a>
                    </h2>

                    <p class="post-meta">
                      Posted by <a class="post-meta-element" href="#">Kim Nilson</a>
                      In <a href="#" class="categorys">Child</a>
                      With <a class="comments" href="#comments">230 Comments</a>
                    </p>
                    <p>
                      Richard McClintock a Latin professor at Hampden-Sydney College in the Virginia, looked up one more obscure Latin words, consectetur, from  Lorem Ipsum passage, and going to a through the cites of the word in a classical literature, discovered the source.
                        </p>

                    <a class="btn custom-btn angle-effect" href="#">Read More</a>

                  </article> {/*/.post-content */}
                </div>{/*/.col-sm-10 */}
              </div>{/*/#post-box */}{/*/.row */}
              {/*Post Box End*/}




              {/*Post Box */}
              <div class="row post-box">
                <div class="col-sm-2">
                  <div class="publish-date">
                    <p class="day">12</p>
                    <p class="month-year"><time datetime="2014-05-12">May 2014 </time></p>
                  </div>{/*/.publish-date */}

                  <div class="post-category">
                    <span><i class="fa fa-chain"></i></span>
                  </div>{/*/.post-category */}

                </div>{/*/.col-sm-2 */}

                <div class="col-sm-10">
                  <article class="post-content">
                    <div class="attachmentlink">
                      BOOM - Multi-purpose Responsive Template
                            <a class="attach-link" href="#" > - http://ow.ly/tWCVe</a>
                    </div>

                    <h2 class="post-title">
                      <a href="blog-single.html">Proin gravida nibh vel velit auctor</a>
                    </h2>

                    <p class="post-meta">
                      Posted by <a class="post-meta-element" href="#">Kim Nilson</a>
                      In <a href="#" class="categorys">Child</a>
                      With <a class="comments" href="#comments">230 Comments</a>
                    </p>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It roots in  piece to classical of Latin literature from 45 BC, making it over 2000 years old.
                        </p>
                    <p>
                      Richard McClintock a Latin professor at Hampden-Sydney College in the Virginia, looked up one more obscure Latin words, consectetur, from  Lorem Ipsum passage, and going to a through the cites of the word in a classical literature, discovered the source.
                        </p>
                    <a class="btn custom-btn angle-effect" href="#">Read More</a>
                  </article> {/*/.post-content */}
                </div>{/*/.col-sm-10 */}
              </div>{/*/#post-box */}{/*/.row */}
              {/*Post Box End*/}



              {/*Post Box */}
              <div class="row post-box">
                <div class="col-sm-2">
                </div>{/*/.col-sm-2 */}

                <div class="page-navigator col-sm-10">
                  {/*Pageination */}
                  <ul class="page-navigation">
                    <li><a href="#" class="page-no pre"><i class="fa fa-angle-left"></i></a></li>
                    <li><a href="#" class="page-no active">1</a></li>
                    <li><a href="#" class="page-no">2</a></li>
                    <li><a href="#" class="page-no">3</a></li>
                    <li><a href="#" class="page-no">4</a></li>
                    <li><a href="#" class="page-no">5</a></li>
                    <li><a href="#" class="page-no next"><i class="fa fa-angle-right"></i></a></li>
                  </ul>{/*/.pagination */}
                  {/*Pageination End */}

                </div>{/*/.col-sm-10 */}
              </div>{/*/#post-box */}{/*/.row */}
              {/*Post Box End*/}




            </div>{/*/#blog-section */}


            <aside id="blog-sidebar" class="col-md-4 blog-sidebar">
              <form class="sidebar-search  clearfix" action="#" method="get">
                <input class="form-control" type="text" name="s" id="s" placeholder="Search" required />
                <button class="btn" type="submit"><i class="fa fa-search"></i></button>
              </form>
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
                </ul>{/*/.widget-content */}
              </div>{/*/.widget */}



              <div class="widget clearfix">
                <h3 class="title">
                  Popular Posts
                </h3>

                <ul class="popular-post">
                  <li>
                    <img src="images/gallery-images/thumb/pr-image-1.jpg" alt="post image" />
                    <a href="#">Proin gravida nibh vel velit auctor</a><br />
                    <time class="post-meta-element" datetime="2014-03-29">29 March</time> | <a class="popular-post-comment" href="#">29 Comments</a>
                  </li>
                  <li>
                    <img src="images/gallery-images/thumb/pr-image-2.jpg" alt="post image" />
                    <a href="#">Proin gravida nibh vel velit auctor</a><br />
                    <time class="post-meta-element" datetime="2014-03-29">29 March</time> | <a class="popular-post-comment" href="#">29 Comments</a>
                  </li>
                  <li>
                    <img src="images/gallery-images/thumb/pr-image-3.jpg" alt="post image" />
                    <a href="#">Proin gravida nibh vel velit auctor</a><br />
                    <time class="post-meta-element" datetime="2014-03-29">29 March</time> | <a class="popular-post-comment" href="#">29 Comments</a>
                  </li>
                </ul>{/*/.latest-post */}
              </div>{/*/.widget */}



              <div class="widget clearfix">
                <h3 class="title">
                  Tag Clouds
                </h3>
                <div class="tagcloud">
                  <a href="#">Mother</a>
                  <a href="#">Children</a>
                  <a href="#">Donation</a>
                  <a href="#">Nature</a>
                  <a href="#">See World</a>
                  <a href="#">Donner</a>
                  <a href="#">Forest</a>
                  <a href="#">Poor Baby</a>
                  <a href="#">Wield</a>
                  <a href="#">Orphan</a>
                </div>{/*/.tagcloud */}
              </div>{/*/.widget */}





              <div class="widget">
                <h3 class="title">
                  Archive
                </h3>

                <ul class="widget-content">
                  <li><a href="#" >January (11)</a></li>
                  <li><a href="#" >February  (13)</a></li>
                  <li><a href="#" >March (21)</a></li>
                  <li><a href="#" >April (06)</a></li>
                  <li><a href="#" >May (09)</a></li>
                </ul>{/*/.widget-content */}
              </div>{/*/.widget */}



              <div class="widget">
                <h3 class="title">
                  Text Widget
                </h3>

                <p class="widget-content">
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
                </p>{/*/.widget-content */}
              </div>{/*/.widget */}


            </aside>{/*/#blog-sidebar */}
          </div> {/*/.row */}
        </div>{/*/.container */}



        {/*Scroll to Top */}
        <div id="scroll-to-top">
          <div class="hex scroll-top">
            <span><i class="fa fa-chevron-up"></i></span>
          </div>
        </div>{/*/#scroll-to-top */}
        {/*Scroll to Top End*/}




        {/*Footer Section */}
        <footer id="footer-section">
          <div class="footer-section">
            <div class="container">
              <div class="footer-social-btn pull-right">
                <a href="#" class="twitter-btn"><i class="fa fa-twitter"></i></a>
                <a href="#" class="facebook-btn"><i class="fa fa-facebook"></i></a>
                <a href="#" class="github-btn"><i class="fa fa-github-alt"></i></a>
                <a href="#" class="vimeo-btn"><i class="fa fa-vimeo-square"></i></a>
                <a href="#" class="pinterest-btn"><i class="fa fa-pinterest"></i></a>
                <a href="#" class="google-plus-btn"><i class="fa fa-google-plus"></i></a>
                <a href="#" class="youtube-btn"><i class="fa fa-youtube"></i></a>
                <a href="#" class="dribbble-btn"><i class="fa fa-dribbble"></i></a>
                <a href="#" class="linkedin-btn"><i class="fa fa-linkedin"></i></a>
              </div>{/*/.footer-social-btn */}
              <div class="copyrights pull-left">
                &copy; <a href="#">Heal</a> 2014, All Rights Reserved, Developed by <a href="http://www.codexcoder.com">CodexCoder</a>
              </div>{/*/.copyrights */}


            </div>{/*/.container */}
          </div>{/*/.footer-section */}
        </footer>{/*/#footer-section */}
        {/*Footer Section End */}
      </React.Fragment>
    </Layout>
  )
}

export default AllPosts

AllPosts.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query AllPosts {
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
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
