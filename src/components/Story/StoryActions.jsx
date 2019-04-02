import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {FlexItem, Spacer, RowContainer} from '../../bases/FlexItems'


const StoryActions = props => {
    return (
        <RowContainer  {...props}>
            <FlexItem>Like</FlexItem>
            <FlexItem>Comment</FlexItem>
            <FlexItem>Share</FlexItem>
            <Spacer/>
            <FlexItem>Fav</FlexItem>
        </RowContainer>
    )
}

export default StoryActions