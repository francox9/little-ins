import React, {useEffect} from 'react'
import {PageContainer} from '../../bases/styled'
import {connect} from 'react-redux'
import {ASYNC_SETUP_POST} from '../../store/actions.async'
import {StoryView} from '../Story'

// const Story = props => {
//     const {story} = props
//     return story.isReady ? <Story_ {...story} />: null
// }


const mapStateToProps = state => ({
    post: state.post
})
const mapDispatchToProps = dispatch => ({
    setupPost: pid => dispatch(ASYNC_SETUP_POST(pid))
})

const Post = props => {
    useEffect(() => {
        props.setupPost(props.match.params.pid)
    }, [])

    const {post} = props

    return (
        <PageContainer>
            { post.isReady ? <StoryView story={post} /> : null }
            {/* <Story story={post} /> */}
        </PageContainer>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)