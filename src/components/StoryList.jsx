import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ASYNC_SETUP_STORIES} from '../store/actions.async'
import Story from './Story'
import styled from 'styled-components'
import {SingleClnContainer} from '../bases/FlexItems'


const StoriesContainer = styled(SingleClnContainer)`
    width: 600px;
    max-width: 100%;
    margin-left: 100px;
`

const mapStateToProps = state => ({
    ...state.storylist // stories, inProgress
})
const mapDispatchToProps = dispatch => ({
    setupStories: () => dispatch(ASYNC_SETUP_STORIES())
})

class StoryList extends Component {
    // constructor() { super() }
    componentDidMount() {
        this.props.setupStories()
    }
    componentDidUpdate() {
        // console.log(this.props)
    }

    render() {
        // console.log(this.props.stories)
        return (
            <StoriesContainer>
                {this.props.stories.map(story => <Story key={story.id} story={story} />)}
            </StoriesContainer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryList)