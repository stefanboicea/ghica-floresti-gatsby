import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class ServiceSection extends Component {
	render() {
		const { data } = this.props
		let items = []
		let itemsli = []
		for (const [index, item] of data.services.entries()) {
			items.push(
				<div className="col-md-4 from-bottom delay-200" key={index}>
					<div className="service-box">
						<div className="hex service-icon-hex">
							<div className="service-icon">
								<span aria-hidden="true" className="li_star"></span>
							</div>{/*/.service-icon */}
						</div>{/*/.hex */}
						<h3 className="service-title content-title">
							{item.name}
						</h3>{/*/.service-title content-title */}
						<p className="service-description">
							{item.description}
						</p>{/*/.service-description */}

						<div className="services-button">
							{item.linkbutton &&  <a href={item.linkbutton.url} className="btn custom-btn angle-effect">
								Detalii
			</a> }
						</div>{/*/.services-button */}
					</div>{/*/.service-box */}
				</div>
			)
		}

		return (
			<React.Fragment>
				{/*Services Section */}
				<section id="service">
					<div className="services-section white-bg angular section-padding">
						<div className="top-angle">
						</div>{/*/.top-angle */}
						<div className="container">
							<div className="section-head">
								<h2 className="section-title">
									{data.title}
								</h2>
								<p className="section-description">
									{data.subtitle}
								</p>
							</div>{/*/.section-head */}

							<div className="section-content">
								<div className="row">


									<div className="col-md-4 from-bottom delay-600">
										<div className="service-box">
											<div className="hex service-icon-hex">
												<div className="service-icon">
													<span aria-hidden="true" className="li_lab"></span>
												</div>{/*/.service-icon */}
											</div>{/*/.hex */}
											<h3 className="service-title content-title">
												Tree Planting
									</h3>{/*/.service-title content-title */}
											<p className="service-description">
												We arrange event to make the world green and keep the environment favorable to us. Worldwide Tree is notable one of them.
									</p>{/*/.service-description */}

											<div className="services-button">
												<a href="#" className="btn custom-btn angle-effect">
													Learn More
										</a>
											</div>{/*/.services-button */}
										</div>{/*/.service-box */}
									</div>{/*/.col-md-4 */}

									<div className="col-md-4 from-bottom delay-1000">
										<div className="service-box">
											<div className="hex service-icon-hex">
												<div className="service-icon">
													<span aria-hidden="true" className="li_world"></span>
												</div>{/*/.service-icon */}
											</div>{/*/.hex */}
											<h3 className="service-title content-title">
												Child Care
									</h3>{/*/.service-title content-title */}
											<p className="service-description">
												In the present world, Childs' are living in danger, especially street Childs. We have many child care centers to care them.
									</p>{/*/.service-description */}

											<div className="services-button">
												<a href="#" className="btn custom-btn angle-effect">
													Learn More
										</a>
											</div>{/*/.services-button */}
										</div>{/*/.service-box */}
									</div>{/*/.col-md-4 */}
								</div>
							</div>
						</div>{/*/.container*/}
					</div>{/*/.services-section */}
				</section>
			</React.Fragment>
		)
	}
}

ServiceSection.propTypes = {
	data: PropTypes.any.isRequired
}

