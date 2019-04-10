import React from 'react'
import styled from 'styled-components'
import { RowContainer, FlexItem} from '../../bases/FlexItems'
import useCollapsableText from '../../bases/useCollapsableText'
import parseLinks from '../../bases/parseLinks'
import {HeartSMButton} from '../../bases/Buttons'

const Container = styled.div`
  padding: 10px;
`
const CommentContainer = styled(RowContainer)`
  align-items: center;
  justify-content: space-between;
  padding: 0;
`

const Comment = props => {
  const author = props.data.owner.username
  const {data, showAll} = useCollapsableText(props.data.text)

  return (
    <CommentContainer>
      <FlexItem>
        <strong>{author}</strong>
        {data.content.map((text, index) => 
          <span key={index}> 
            {parseLinks(text)} 
          </span>
        )}
        {data.moreToLoad && <span onClick={showAll}>Load</span>}
      </FlexItem>
      
      <HeartSMButton/>
      
    </CommentContainer>
  ) 
}
const Comments = props => {
    const {count, data: comments} = props 
    const showingAll = comments.length >= count

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