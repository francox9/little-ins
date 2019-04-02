import React, {useState} from 'react'
import styled from 'styled-components'
import {SingleClnContainer} from '../../bases/FlexItems'
import configs from '../../common/configs'
import useCollapsableText from '../../bases/useCollapsableText'


const CAPTION_WORD_LIMIT = configs.CAPTION_WORD_LIMIT

const Container = styled.div`
    padding: 10px;
` 

const Line = props => [
    <span key="content">{props.content}</span>, 
    props.moreToLoad && <a key="btn" href="javascript:;" onClick={props.onClick}>Load More</a>,
    <br key="breaker"/>
]

const StoryCaption = props => {
    const {data, showAll} = useCollapsableText(props.caption)

    // let captionLines = props.caption.split(/\n/)

    // const [showingAll, _showAll] = useState(captionLines.length <= 1 && captionLines[0].length < CAPTION_WORD_LIMIT)
    // const showAll = () => _showAll(true)

    // let caption = showingAll ? captionLines : [captionLines[0].slice(0, 120)]
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