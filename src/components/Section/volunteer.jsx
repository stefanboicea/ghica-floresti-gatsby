import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class VolunteerSection extends Component {
	render() {
		const { data } = this.props
		
		return (
			<React.Fragment>
				{/*Volunteer Section */}
				<section id="volunteer">
					<div className="volunteer-section">
						<div className="gray-bg angular section-padding">

							<div className="top-angle">
							</div>{/*/.top-angle */}

							<div className="container">

								<div className="row">
									<div className="section-content">
										<div className="media-content media-left col-md-4 from-bottom delay-200">
											<div className="meida-container">
												<img src={data.image.url} alt="volunteer" />
											</div>
										</div>


										<div className="content-box col-md-8 from-bottom delay-600">
											<div className="hex content-icon-hex pull-left">
												<div className="content-icon">
													<span aria-hidden="true" className="li_user"></span>
												</div>
											</div>{/*/.content-icon-hex */}
											<h3 className="content-title">{data.title}</h3>
											<p>
												<strong>{data.subtitle}</strong>
											</p>
											<p>
												{data.description}
											</p>
											<p>
												{/* <a href={Link.url || '#contact' } className="btn custom-btn angle-effect"> */}
												<a href="#contact" className="btn custom-btn angle-effect page-scroll">
													Aplica acum
										</a>
											</p>
										</div>
									</div>
								</div>

							</div>

						</div>
					</div>{/*/.volunteer-section */}
				</section>{/*/#volunteer */}
				{/*Volunteer Section End */}
			</React.Fragment>
		)
	}
}

VolunteerSection.propTypes = {
	data: PropTypes.any.isRequired
}

