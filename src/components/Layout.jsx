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
									<a className="navbar-brand" href="index.html">
										<img className="logo" src={'/assets/images/logo.png'} alt="Logo" rel="hoome" />
									</a>
								</h1>
							</div>

							<nav className="collapse navbar-collapse">
								<a href="#donate" className="donate pull-right">Donează <i className="fa fa-heart"></i></a>
								<ul id="headernavigation" className="nav navbar-nav pull-right">
									<li><a className="page-scroll active" href="/#top-section">Acasa</a></li>
									<li><a className="page-scroll" href="/#about">Despre</a></li>
									{/* <li><a className="page-scroll" href="/#team">Echipa</a></li> */}
									<li><a className="page-scroll" href="/#service">Proiecte</a></li>
									{/* <Link hash={`gallery`} activeClassName="page-scroll">Galerie</Link> */}
									<li><a className="page-scroll" href="/#news">Blog</a></li>
									<li><a className="page-scroll" href="/#upcoming-events">Evenimente</a></li>
									<li><a className="page-scroll" href="/#contact">Contact</a></li>

								</ul>
							</nav>
						</div>
					</div>
				</div>
      </React.Fragment>
      {children}
      {/* <Footer>
        <div dangerouslySetInnerHTML={{ __html: data.prismicHomepage.data.footer.html }} />
      </Footer> */}
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
