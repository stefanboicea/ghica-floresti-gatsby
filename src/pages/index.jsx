import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { TopSection, AboutSection, AboutParalaxSection, CausesSection, TestimonalSection, EventsSection, PricingSection, ServiceSection, VolunteerSection, NewsSection, Gallery, ClientsSection, ContactSection, TeamSection } from '../components/Section';

class Index extends Component {
	render() {
		const {
			data: { homepage, topSection, aboutSection, aboutParalaxSection, teamSection, volunteerSection, servicesSection, causesSection, eventsSection, testimonialSection, partnersSection, contactSection,posts, elementegalerie },
		} = this.props
		return (
			<React.Fragment>
				<div className="main-menu-container navbar-fixed-top">
					<div id="main-menu" className="navbar navbar-default" role="navigation">
						<div className="container">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
									<span className="sr-only">Toggle navigation</span>
									<i className="fa fa-bars"></i>
								</button>
								<h1>
									<a className="navbar-brand" href="index.html">
										<img className="logo" src="assets/images/logo.png" alt="Logo" rel="hoome" />
									</a>
								</h1>
							</div>

							<nav className="collapse navbar-collapse">
								<a href="#contact" className="donate pull-right page-scroll">Implică-te! 
								 {/* <i className="fa fa-heart"></i> */}
								</a>
								<ul id="headernavigation" className="nav navbar-nav pull-right">
									<li><a className="page-scroll active" href="#top-section">Acasa</a></li>
									<li><a className="page-scroll" href="#about">Despre</a></li>
									{/* <li><a className="page-scroll" href="#team">Echipa</a></li> */}
									<li><a className="page-scroll" href="#service">Proiecte</a></li>
									<li><a className="page-scroll" href="#gallery">Galerie</a></li>
									<li><a className="page-scroll" href="#news">Stiri</a></li>
									<li><a className="page-scroll" href="#upcoming-events">Evenimente</a></li>
									<li><a className="page-scroll" href="/istoria">Istoria</a></li>
									<li><a className="page-scroll" href="#contact">Contact</a></li>

								</ul>
							</nav>
						</div>
					</div>
				</div>

				{homepage.data.show_top_section === 'yes' &&
					<TopSection data={topSection.data} ></TopSection>
				}

				{homepage.data.show_about_section === 'yes' &&
					<AboutSection data={aboutSection.data}></AboutSection>
				}

				{homepage.data.show_about_paralax_section === 'yes' &&
					<AboutParalaxSection data={aboutParalaxSection.data}></AboutParalaxSection>
				}

				{homepage.data.show_team_section === 'yes' &&
					<TeamSection data={teamSection.data}></TeamSection>
				}

				{homepage.data.show_volunteer_section === 'yes' &&
					<VolunteerSection data={volunteerSection.data}></VolunteerSection>
				}

				{homepage.data.show_services_section === 'yes' &&
					<ServiceSection data={servicesSection.data}></ServiceSection>
				}

				{homepage.data.show_pricing_section === 'yes' &&
					<PricingSection></PricingSection>
				}

				{homepage.data.show_testimonails_section === 'yes' &&
					<TestimonalSection data={testimonialSection.data}></TestimonalSection>
				}

				{homepage.data.show_gallery_section === 'yes' &&
					<Gallery items={elementegalerie.edges}></Gallery>
				}

				{homepage.data.show_causes_section === 'yes' &&
					<CausesSection data={causesSection.data}></CausesSection>
				}

				{homepage.data.show_news_section === 'yes' &&
					<NewsSection data={posts}></NewsSection>
				}

				{homepage.data.show_events_section === 'yes' &&
					<EventsSection data={eventsSection.data}></EventsSection>
				}

				{homepage.data.show_partners_section === 'yes' &&
					<ClientsSection data={partnersSection.data}></ClientsSection>
				}

				{homepage.data.show_contact_section === 'yes' &&
					<ContactSection data={contactSection.data}></ContactSection>
				}
				
				{/* <div id="google-map">
					<div className="map-container">
						<div id="googleMaps" className="google-map-container"></div>
					</div>
				</div> */}

				{/*Scroll to Top */}
				<div id="scroll-to-top">
					<div className="hex scroll-top">
						<span><i className="fa fa-chevron-up"></i></span>
					</div>
				</div>{/*/#scroll-to-top */}
				{/*Scroll to Top End*/}




				{/*Footer Section */}
				<footer id="footer-section">
					<div className="footer-section">
						<div className="container text-center">
							<div className="footer-social-btn">
								{/* <a href="#" className="twitter-btn"><i className="fa fa-twitter"></i></a> */}
								<a href="https://www.facebook.com/domeniulcantacuzino" className="facebook-btn"><i className="fa fa-facebook"></i></a>
								<a href="https://www.instagram.com/domeniulcantacuzinofloresti" className="instagram-btn"><i className="fa fa-instagram"></i></a>
								{/* <a href="#" className="github-btn"><i className="fa fa-github-alt"></i></a> */}
								{/* <a href="#" className="vimeo-btn"><i className="fa fa-vimeo-square"></i></a> */}
								{/* <a href="#" className="pinterest-btn"><i className="fa fa-pinterest"></i></a> */}
								{/* <a href="#" className="google-plus-btn"><i className="fa fa-google-plus"></i></a> */}
								<a href="https://www.youtube.com/channel/UCKO0E6Ol2zU2dfwlnfkcxHg?" className="youtube-btn"><i className="fa fa-youtube"></i></a>
								{/* <a href="#" className="dribbble-btn"><i className="fa fa-dribbble"></i></a> */}
								{/* <a href="#" className="linkedin-btn"><i className="fa fa-linkedin"></i></a> */}
							</div>{/*/.footer-social-btn */}
							<div className="copyrights pull-left">
							© 2019 | Domeniul Cantacuzino
							</div>{/*/.copyrights */}


						</div>
					</div>{/*/.footer-section */}
				</footer>

			</React.Fragment>

		)
	}
}

export default Index

Index.propTypes = {
	data: PropTypes.shape({
		posts: PropTypes.object.isRequired,
		elementegalerie: PropTypes.object.isRequired
	}).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
		homepage: prismicHomepage {
			data {
				title {
					text
				}
				content {
					html
				}
				show_top_section
				show_team_section
				show_about_section
				show_about_paralax_section
				show_volunteer_section
				show_services_section
				show_testimonails_section
				show_gallery_section
				show_causes_section
				show_news_section
				show_news_section
				show_events_section
				show_partners_section
				show_contact_section
				show_maps_section
			}
		}
		topSection: prismicTopsection {
			data {
				carousel {
					toptext
					middletext
					buttomtext
					linkbutton {
						url
					}
				}
			}
		}
		aboutSection: prismicAboutsection {
			data {
				title
				subtitle
				carouseltitle
				carouselsubtitle
				carouseldescription
				carousel {
					image {
						url
					}
				}
				iframetitle
				iframesubtitle
				iframedescription
				iframelink {
					url
				}
			}
		}
		aboutParalaxSection: prismicAboutparalaxsection {
			data {
				title
				subtitle
				donationpercent
				donationtotal
				donationlink {
					url
				}
			}
		}
		teamSection: prismicTeamsection {
			data {
				title
				subtitle
				teammembers {
					name
					role
				}
			}
		}
		volunteerSection: prismicVolunteersection {
			data {
				title
				subtitle
				description
				link {
					url
				}
				image {
					url
				}
			}
		}
		servicesSection: prismicServicessection {
			data {
				title
				subtitle
				services {
					name
					
				}
			}
		}
		causesSection: prismicCausessection {
			data {
				title
				subtitle
				causes {
					title
					description
					donationpercent
					donationlimit
					donationlink {
						url
					}
					image {
						url
					}
				}
			}
		}
		eventsSection: prismicEventssection {
			data {
				title
				subtitle
				events {
					title
					place
					time (formatString: "DD.MM.YYYY hh:mm")
					image {
						url
					}
					link {
						url
					}
				}
			}
		}
		testimonialSection: prismicTestimonialssection {
			data {
				testimonials {
					name
					description
					avatar {
						url
					}
				}
			}
		}
		partnersSection: prismicPartners {
			data{
				partners {
					logo {
						url
					}
					link {
						url
					}
				}
			}
		}
		contactSection: prismicContactsection {
			data{
			subtitle
				infotitle
				description
				location
				phonelist
				maillist
			}
		}
    posts: allPrismicPost(limit: 4, sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
			}
			coverimage {
				localFile {
				  childImageSharp {
					fluid(maxWidth: 1200, quality: 90) {
					  ...GatsbyImageSharpFluid_withWebp
					}
				  }
				}
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
          }
        }
      }
		}
    elementegalerie:allPrismicGalerieElement {
      edges {
      node {
        id
        data {
        titlu {
          text
        }
        descriere {
          text
        }
        imagine {
          url
        }
        }
        tags 
      }
      }
    }
  }
`
