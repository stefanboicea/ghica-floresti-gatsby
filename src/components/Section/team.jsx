import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class TeamSection extends Component {
	render() {
		const { data } = this.props
		
		let items = []
        let itemsli = []
        for (const [index, item] of data.teammembers.entries()) {
            items.push(
				<div className="item" key={index}>
				<div className="team-member-box from-bottom delay-200">
					{/* <figure>
						<img src={item.avatar.url} alt="membru echipa" />
					</figure> */}
					<h3 className="member-name">{item.name}</h3>
					<h4 className="member-designation">{item.role}</h4>
					{/* <p className="member-description">
						{item.description}
			</p> */}
			{/*/.member-description */}
					{/* <div className="social-buttons">
						<a href="#" className="facebook-btn"><i className="fa fa-facebook"></i></a>
						<a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a>
						<a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a>
						<a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a>
						<a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a>
					</div> */}
				</div>{/*/.team-member-box */}
			</div>
            )
		}
		
		return (
			<React.Fragment>
				{/*Team Section */}
				<section id="team">
					<div className="team-section">
						<div className="white-bg angular section-padding">
							<div className="top-angle">
							</div>{/*/.top-angle */}
							<div className="container">
								<div className="section-head">
									<h2 className="section-title">{data.title}</h2>
									<p className="section-description">
										{data.subtitle}
									</p>
								</div>

								<div id="team-slider" className="owl-carousel owl-theme">
									{items}

									
								</div>{/*/#team-slider */}

							</div>
						</div>{/*./white-bg */}
					</div>{/*/.team-section */}
				</section>{/*/#team*/}
				{/*Team Section End */}
			</React.Fragment>
		)
	}
}

TeamSection.propTypes = {
	data: PropTypes.any.isRequired
}

