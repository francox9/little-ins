import React from "react";
import styled from 'styled-components'
import PropTypes from "prop-types";
import { Spacer, RowContainer } from "../../bases/FlexItems";
import { HeartButton, ShareButton, CommentButton, FavButton } from "../../bases/Buttons";


const StoryActions = props => {
  return (
    <RowContainer padding="0 10px">
      <HeartButton/>
      <ShareButton/>
      <CommentButton/>
      


      <Spacer />
      
      <FavButton/>
    </RowContainer>
  );
};

export default StoryActions;
