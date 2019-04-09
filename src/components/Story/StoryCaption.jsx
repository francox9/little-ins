import React from 'react'
import styled from 'styled-components'
import useCollapsableText from '../../bases/useCollapsableText'
import parseLinks from '../../bases/parseLinks'

const Container = styled.div`
    padding: 10px;
` 

const Line = props => [
    <span key="content">{parseLinks(props.content)}</span>, 
    props.moreToLoad && <a key="btn" href="javascript:;" onClick={props.onClick}>Load More</a>,
    <br key="breaker"/>
]

const StoryCaption = props => {
    const {data, showAll} = useCollapsableText(props.caption)

    /**
     * 要对于120的时候万一是一个link没有结束的情况处理一下
     */

    return (
        <Container>
            <strong>AuthorName</strong>
            { data.content.map((line, index) => <Line key={index} content={line} moreToLoad={data.moreToLoad} onClick={showAll}/>) }
        </Container>
    );
  };
  
  
  export default StoryCaption