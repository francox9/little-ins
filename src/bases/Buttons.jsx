import React from "react";

import { Heart, Share, Comment, Fav, Dots, Heart_sm } from "./Icon";
import styled from "styled-components";

const ButtonStyled = styled.button.attrs(() => ({
  type: "button"
}))`
  cursor: pointer;
`;

const ActionButton = styled(ButtonStyled)`
  min-height: 40px;
  min-width: 40px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const PadButton = styled(ButtonStyled)`
  padding: 0 24px;
  border-radius: 3px;
  border: solid #dbdbdb 1px;
`;


// const MakeButton = props => {

// }

export const HeartButton = props => (
  <ActionButton>
    <Heart />
  </ActionButton>
);
export const HeartSMButton = props => (
  <ActionButton>
    <Heart_sm />
  </ActionButton>
);

export const ShareButton = props => (
  <ActionButton>
    <Share />
  </ActionButton>
);
export const CommentButton = props => (
  <ActionButton>
    <Comment />
  </ActionButton>
);
export const FavButton = props => (
  <ActionButton>
    <Fav />
  </ActionButton>
);
export const DotsButton = props => (
  <ActionButton>
    <Dots />
  </ActionButton>
);
