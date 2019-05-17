import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GalleryItem from './gallery-item';


export default class Gallery extends Component {
    render() {
        const { items } = this.props
        const tags = new Set()
        items.forEach(item => {
            item.node.tags.forEach(tag => {
                tags.add(tag)
            })
        })
        const tagList = Array.from(tags)
        return (
            <React.Fragment>
                {/*Gallery Section */}
                <section id="gallery">
                    <div className="gallery-section white-bg angular section-padding">
                        <div className="top-angle">
                        </div>{/*/.top-angle */}
                        <div className="container">
                            <div className="section-head">
                                <h2 className="section-title">
                                    Galerie
						</h2>{/*/.section-title */}
                                <p className="section-description">
                                Imagini cu Domeniul Cantacuzino de la Florești, Prahova
						</p>
                            </div>{/*/.section-head */}

                            <div id="gallery-container" className="gallery-container">
                                <div className="galleryFilter">
                                    <a href="#" data-filter="" className="current">Toate</a>
                                    {tagList.map(tag => {
                                        const filter = '.' + tag
                                        return <a href="#" key={filter} data-filter={filter}>{tag}</a>
                                    })}
                                </div> {/*/.galleryFilter */}


                                <div className="gallery-item element-from-bottom">
                                    {items.map(item => {
                                        return <GalleryItem key={item.node.id} item={item.node}></GalleryItem>
                                    })}
                                </div>{/*/.gallery-item */}
                            </div>{/*/gallery-container */}
                        </div>
                    </div>{/*/.gallery-section */}
                </section>
                {/*Gallery Section End */}
            </React.Fragment>
        )
    }
}

Gallery.propTypes = {
    items: PropTypes.any.isRequired
}

