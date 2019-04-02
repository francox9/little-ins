import React from 'react'
import styled from 'styled-components'
import {SingleClnContainer, RowContainer, FlexItem} from '../../bases/FlexItems'
import useCollapsableText from '../../bases/useCollapsableText'

const Container = styled.div`
  padding: 10px;
`
const CommentContainer = styled(RowContainer)`
  align-items: center;
  justify-content: space-between;
`

const Comment = props => {
  const author = props.data.owner.username
  const {data, showAll} = useCollapsableText(props.data.text)
  

  return (
    <CommentContainer>
      <FlexItem>
        <strong>{author}</strong>
        {data.content.map(text => <span>{text}</span>)}
        {data.moreToLoad && <span onClick={showAll}>Load</span>}
      </FlexItem>
      <FlexItem>Heart</FlexItem>
      
    </CommentContainer>
  ) 
}
const Comments = props => {
    let {edges: comments, count} = props.data
    comments = comments.map(c => c.node)
    const showingAll = comments.length >= count

    // console.log(comments, count, showingAll)
    return (
      <Container>
          {
            !showingAll && ([
              <h3 key="title">Show All {count} comments</h3>,
              comments.map(c => <Comment key={c.id} data={c}/>) 
            ])
          }
      </Container>
    );
  };
  
  
  export default Comments