import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Categories from './Categories'

const Item = styled.li``

const Headline = styled.p``

const StyledLink = styled(Link)

export default class ListItem extends Component {
  render() {
    const { node, categories } = this.props
    return (
      <Item>
        <Headline>
          {node.data.date} — {categories && <Categories categories={categories} />}
        </Headline>
        <StyledLink to={node.uid}>{node.data.title.text}</StyledLink>
      </Item>
    )
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
}
