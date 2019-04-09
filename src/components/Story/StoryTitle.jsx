import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {FlexItem, Spacer, RowContainer} from '../../bases/FlexItems'
import { DotsButton } from "../../bases/Buttons";


const ImageContainer = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
  border: solid 1px rgb(0, 53, 105);
`
const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
`

const StoryTitle = props => {
  const {author} = props

  return (
    <RowContainer>
      <FlexItem>
        <ImageContainer>
          <ImgStyled src={author.profile_pic_url}/>
        </ImageContainer>
      </FlexItem>
      <FlexItem>
        <strong>{author.username}</strong>
      </FlexItem>
      <Spacer />
      <DotsButton/>
    </RowContainer>
  );
};

StoryTitle.propTypes = {
  author: PropTypes.shape({
    profile_pic_url: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
}

export default StoryTitle