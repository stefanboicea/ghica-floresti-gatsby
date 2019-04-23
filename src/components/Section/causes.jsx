import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class CausesSection extends Component {
	render() {
		const { data } = this.props
		let items = []
		let itemsli = []
		for (const [index, item] of data.causes.entries()) {
			
			items.push(
				<div className="item col-md-12" key={index}>
					<div className="causes-post">
						<figure>
							<img src={item.image.url} />
							<figcaption>
								<div className="caption-txt">
									<span className="donated">{item.donationpercent}% donat </span>
									<span className="to-go">/ inca {item.donationlimit} </span>
								</div>

								<div className="progress">
									<div id="causes-progress-1" className="progress-bar custom-progress-bar" role="progressbar" aria-valuenow={item.donationpercent} aria-valuemin="0" aria-valuemax="100">
										<span className="sr-only">{item.donationpercent}% complet</span>
									</div>
								</div>{/*/.progress */}
							</figcaption>
						</figure>
						<h3 className="causes-post-title">
							{item.title}
			</h3>{/*/.causes-post-title */}
						<p className="post-text">
						{item.description}
			</p>{/*/.post-text */}
			{item.donationlink && <a className="btn donate-btn" href={item.donationlink.url}>
							Doneaza
			</a> }
					</div>{/*/.causes-post */}
				</div>
			)
		}
		return (
			<React.Fragment>
				{/*Causes Section*/}
				<section id="causes">
					<div className="causes-section gray-bg  angular section-padding">
						<div className="top-angle">
						</div>{/*/.top-angle */}
						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<div className="content-box">
										<div className="hex content-icon-hex hex-margin">
											<div className="content-icon">
												<span aria-hidden="true" className="li_megaphone"></span>
											</div>
										</div>
										<h3 className="content-title">
											{data.title}
								</h3>
										<p className="content-description">
											{data.subtitle}
								</p>
										<div className="slide-nav-container">
											<a className="slide-nav left slide-left" href="#causes-post-slider" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
											<a className="slide-nav right slide-right" href="#causes-post-slider" data-slide="next"><i className="fa fa-chevron-right"></i></a>
										</div>{/*/.slide-nav-container */}
									</div>
								</div>{/*/.col-md-4 */}

								<div className="col-md-8">
									<div className="row">
										<div id="causes-post-slider" className="owl-carousel owl-theme">
											{items}
										</div>{/*/.causes-post-slider */}
									</div>{/*/row */}
								</div>{/*/.col-md-8 */}
							</div>
						</div>

					</div>{/*/.causes-section */}
				</section>{/*/#causes */}
				{/*Causes Section End*/}

			</React.Fragment>
		)
	}
}

CausesSection.propTypes = {
	data: PropTypes.any.isRequired
}

