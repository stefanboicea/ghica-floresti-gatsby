import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

export default class NewsSection extends Component {
	render() {
		const { data } = this.props
		let items = []
		let itemsli = []
		for (const [index, edge] of data.edges.entries()) {
			const item = edge.node.data
			const link = '/' + edge.node.uid
			items.push(
				<div className="news-item col-md-6 from-bottom delay-200" key={index}>
					<Img fluid={item.coverimage.localFile.childImageSharp.fluid} />
					<article className="news-article">
						<div className="article-container">
							<div className="post-meta">
								{/* <div className="meta-icon">
									<span>
										<i className="fa fa-film"></i>
									</span>
								</div> */}

								{/* <time dateTime={item.date}>{item.date}</time> */}
								{/* <span className="name">
									<a href="#">John Doe</a>
								</span> */}
							</div>{/*/.post-meta */}
							<div className="post-details">
								<h3 className="content-title">{item.title.text}</h3>
								<p>
									{item.description}
					</p>
								<div>
									<a href={link} className="btn custom-btn angle-effect">Mai mult</a>
								</div>
							</div>{/*/.post-details */}
						</div>{/*/.article-container */}
					</article>{/*/.news-article */}
				</div>
			)
		}

		return (
			<React.Fragment>
				{/*News Section*/}
				<section id="news">
					<div className="news-section white-bg angular section-padding">
						<div className="top-angle">
						</div>{/*/.top-angle */}
						<div className="container">
							<div className="section-head">
								<h2 className="section-title">
									Stiri
						</h2>{/*/.section-title */}
								<p className="section-description">
									Verifica aici ultimele stiri
						</p>
							</div>{/*/.section-head */}

							<div className="row">
								<div className="news-container">
								{items}
								
								</div>{/*/.news-container */}
							</div>
							<div className="view-all">
										<a href="blog-page.html" className="btn custom-btn angle-effect">Vezi tot</a>
									</div>
						</div>
					</div>{/*/.news-section */}
				</section>{/*/#news */}
				{/*News Section End*/}
			</React.Fragment>
		)
	}
}

NewsSection.propTypes = {
	data: PropTypes.any.isRequired
}

