import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class EventsSection extends Component {
	render() {
		const { data } = this.props
		let items = []
		for (const [index, item] of data.events.entries()) {
			items.push(
				<div className="item col-md-12" key={index}>
					<div className="event-content">
						<h4 className="content-title">
							<a href={item.link.url}>{item.title}</a>
						</h4>
						<div className="event-date-time-place">
							<time dateTime={item.time}>
								<span><i className="fa fa-clock-o"></i></span> {item.time}
							</time>

							<span><i className="fa fa-map-marker"></i></span> Locatie: {item.place}
						</div>
						<div className="event-img">
							<img src={item.image.url} />
						</div>
					</div>
				</div>
			)
		}

		return (
			<React.Fragment>
				{/*Upcoming Events Section */}
				<section id="upcoming-events">
					<div className="upcoming-events-section gray-bg angular section-padding">

						<div className="top-angle"></div>

						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<div className="content-box">
										<div className="hex content-icon-hex hex-margin">
											<div className="content-icon">
												<span aria-hidden="true" className="li_calendar"></span>
											</div>{/*/.content-icon */}
										</div>{/*/.content-icon-hex */}
										<h3 className="content-title">
											{data.title}
										</h3>
										<p className="content-description">
											{data.subtitle}
										</p>
									</div>

									<div className="slide-nav-container customNavigation">
										<a className="slide-nav left slide-left" href="#event-post-slider" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
										<a className="slide-nav right slide-right" href="#event-post-slider" data-slide="next"><i className="fa fa-chevron-right"></i></a>
									</div>{/*/.slide-nav-container */}
								</div>{/*/.col-md-4 */}

								<div className="col-md-8">
									<div className="row">
										<div className="event-container">
											<div id="event-post-slider" className="owl-carousel owl-theme">


												{items}

											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="bottom-angle"></div> */}
					</div>{/*/.upcoming-events-section */}
				</section>{/*/.upcoming-events */}
				{/*Upcoming Events Section End*/}

			</React.Fragment>
		)
	}
}

EventsSection.propTypes = {
	data: PropTypes.any.isRequired
}

