import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {FlexItem, Spacer, RowContainer} from '../../bases/FlexItems'


const StoryTitle = props => {
  return (
    <RowContainer {...props}>
      <FlexItem>logo</FlexItem>
      <FlexItem>title</FlexItem>
      <Spacer />
      <FlexItem>...</FlexItem>
    </RowContainer>
  );
};


export default StoryTitle