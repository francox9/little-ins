import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.img`
    width: 100%;
    vertical-align: middle;
  `,
  ImageContainer = styled.div`
    flex: 1 0 0;
    margin-bottom: 20px;
    margin-right: ${props => (props.lastOfRow ? "" : "26px")};
    cursor: pointer;
    position: relative;

    @media (max-width: 735px) {
      margin-right: ${props => (props.lastOfRow ? "" : "3px")};
      margin-bottom: 3px;
    }
  `,
  CaptionContainer = styled.div`
    display: ${props => (props.hide ? "none" : "flex")};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    position: absolute;

    align-items: center;
    justify-content: space-evenly;
  `,
  LinkBlock = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const onMouseEnter = () => setHovered(true),
    onMouseLeave = () => setHovered(false);

  return {
    onMouseEnter,
    onMouseLeave,
    hovered
  };
};

const StoryPreview = props => {
  const hover = useHover();
  const { hovered } = hover;
  const {
    lastOfRow,
    likeCount,
    commentCount,
    thumbnail_src,
    thumbnails,
    code
  } = props;

  return (
    <ImageContainer {...hover} lastOfRow={lastOfRow}>
      <Image src={thumbnail_src} />
      <CaptionContainer hide={!hovered}>
        <p style={{ color: "white" }}>
          <span>Heart {likeCount}</span>
          <span>Comment {commentCount} </span>
        </p>

        <LinkBlock to={"/p/" + code} />
      </CaptionContainer>
    </ImageContainer>
  );
};

export default StoryPreview;
