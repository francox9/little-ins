import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import StoryTitle from "./StoryTitle";
import StoryActions from "./StoryActions";
import StoryCaption from "./StoryCaption";
import Comments from "./Comments";

import { SingleClnContainer, RowContainer } from "../../bases/FlexItems";

const StyledImage = styled.img`
  width: 100%;
`;
const Container = styled(SingleClnContainer)`
  border: solid 1px rgb(230, 230, 230);
  border-radius: 3px;
  margin-bottom: 40px;
`;

/* Used in Story List at main page */
export const StoryCard = props => {
  
  const {
    display_url,
    dimensions,
    edge_media_preview_comment,
    owner: author,
    comments,
    commentCount,
    caption,

  } = props.story;

  return (
    <Container as="article">
      <StoryTitle author={author} as="header" />
      <StyledImage src={display_url} />
      <StoryActions />
      <StoryCaption caption={caption} />
      <Comments data={comments} count={commentCount}/>
    </Container>
  );
};
StoryCard.propTypes = {
  story: PropTypes.object.isRequired
};
export default StoryCard;


const RowContainerFlexstart = styled(RowContainer)`
    align-items: flex-start;
    position: relative;
`

/* Used in Post view */
export const StoryView = props => {
  const {
    comments,
    commentCount,
    owner: author,
    display_url,
    caption
  } = props.story;

  return (
    <RowContainerFlexstart as="article">
      <div style={{display: 'flex', marginRight: '335px', flexDirection: 'column'}}>
        <StyledImage src={display_url} />
      </div>

      <div style={{width: '335px', position: 'absolute', right: 0, top: 0, height: '100%', overflowY: 'scroll'}}>
        <StoryTitle author={author} as="header" />
        <StoryCaption caption={caption} />
        <Comments data={comments} count={commentCount} />
        <StoryActions />
      </div>
    </RowContainerFlexstart>
  );
};
