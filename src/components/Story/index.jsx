import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import StoryTitle from './StoryTitle'
import StoryActions from './StoryActions'
import StoryCaption from './StoryCaption'
import Comments from './Comments'

import {SingleClnContainer} from '../../bases/FlexItems'

const StyledImage = styled.img`
    width: 100%;
`
const Container = styled(SingleClnContainer)`
    border: solid 1px rgb(230, 230, 230);
    border-radius: 3px;
    margin-bottom: 40px;
`

const Story = props => {
    let caption, comments
    try { caption = props.story.edge_media_to_caption.edges[0].node.text }
    catch(e) {caption = ''}    

    const {display_url, dimensions, edge_media_preview_comment, owner: author} = props.story
    // const {height, width} = dimensions

    try { comments = edge_media_preview_comment || {count: 0, edges: []} }
    catch(e) { comments = {count: 0, edges: []}}

    return (
        <Container as="article">
            <StoryTitle author={author} as="header"/>
            <StyledImage src={display_url} />
            <StoryActions/>
            <StoryCaption caption={caption}/>
            <Comments data={comments}/>
        </Container>
    )
}

Story.propTypes = {
    story: PropTypes.object.isRequired
}


export default Story
