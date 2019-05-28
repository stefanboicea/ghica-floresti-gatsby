/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '@reach/skip-nav/styles.css'

import Footer from './Footer'
import SEO from './SEO'




const PureLayout = ({ children, data, customSEO }) => (
    <>
      {!customSEO && <SEO />}
      <React.Fragment>
				<div className="main-menu-container navbar-fixed-top">
					<div id="main-menu" className="navbar navbar-default blog-page" role="navigation">
						<div className="container">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
									<span className="sr-only">Toggle navigation</span>
									<i className="fa fa-bars"></i>
								</button>
								<h1>
									<a className="navbar-brand" href={'/'}>
										<img className="logo" src={'/assets/images/logo.png'} alt="Logo" rel="hoome" />
									</a>
								</h1>
							</div>

							<nav className="collapse navbar-collapse" id="main-nav">
							<a href={'/fundatia-cantacuzino-floresti'} className="donate pull-right page-scroll">Implică-te! 
								 {/* <i className="fa fa-heart"></i> */}
								</a>
              <ul id="headernavigation" className="nav navbar-nav pull-right">
									<li><a className="page-scroll active" href="/#top-section">Acasa</a></li>
									{/* <li><a className="page-scroll" href="/#about">Despre</a></li> */}
									{/* <li><a className="page-scroll" href="#team">Echipa</a></li> */}
									<li><a className="page-scroll" href="/#service">Proiecte</a></li>
									<li><a className="page-scroll" href="/#gallery">Galerie</a></li>
									<li><a className="page-scroll" href="/#news">Stiri</a></li>
									<li><a className="page-scroll" href="/#upcoming-events">Evenimente</a></li>
									<li><a className="page-scroll" href="/istoria">Istoria</a></li>
									<li><a className="page-scroll" href="/fundatia-cantacuzino-floresti">Fundația</a></li>
									<li><a className="page-scroll" href="/#contact">Contact</a></li>

								</ul>
							</nav>
						</div>
					</div>
				</div>
      </React.Fragment>
      {children}
      <footer id="footer-section">
					<div className="footer-section">
						<div className="container text-center">
							<div className="footer-social-btn">
								{/* <a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a> */}
								<a href="https://www.facebook.com/domeniulcantacuzino" target="_blank" className="facebook-btn"><i className="fa fa-facebook"></i></a>
								<a href="https://www.instagram.com/domeniulcantacuzinofloresti" target="_blank" className="instagram-btn"><i className="fa fa-instagram"></i></a>
								{/* <a href="#" className="github-btn"><i className="fa fa-github-alt"></i></a> */}
								{/* <a href="#" className="vimeo-btn"><i className="fa fa-vimeo-square"></i></a> */}
								{/* <a href="#" className="pinterest-btn"><i className="fa fa-pinterest"></i></a> */}
								{/* <a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a> */}
								<a href="https://www.youtube.com/channel/UCKO0E6Ol2zU2dfwlnfkcxHg?" target="_blank" className="youtube-btn"><i className="fa fa-youtube"></i></a>
								{/* <a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a> */}
								{/* <a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a> */}
							</div>{/*/.footer-social-btn */}
							<div className="copyrights pull-left">
							© 2019 | Domeniul Cantacuzino
							</div>{/*/.copyrights */}


						</div>
					</div>{/*/.footer-section */}
				</footer>

    </>
)

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            prismicHomepage {
              data {
                footer {
                  html
                }
              }
            }
          }
        `}
        render={data => (
          <PureLayout {...this.props} data={data}>
            {this.props.children}
          </PureLayout>
        )}
      />
    )
  }
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  data: PropTypes.object.isRequired,
  customSEO: PropTypes.bool,
}

PureLayout.defaultProps = {
  customSEO: false,
}
