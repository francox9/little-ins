import React from "react";
import styled from "styled-components";
import {RowContainer} from '../../bases/FlexItems'
import { DotsButton, PadButton } from "../../bases/Buttons";
import { useText } from "../../bases/useCollapsableText";
import {Link} from '../../bases/styled'

const Container = styled.div`
  width: 100%;
  display: flex;
`

const AvatarContainer = styled.span`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`;

const ActionButton = styled(PadButton)`
  font-weight: 600;
  line-height: 26px;
  font-size: 14px;
`;

const Avatar = ({ pic }) => {
  return (
    <AvatarContainer>
      <img style={{ width: "100%", height: "100%" }} src={pic} />
    </AvatarContainer>
  );
};


const Content = props => {
  const [link, linkShimmed] = props.link || [];

  return [
    <RowContainer padding="0">
      <h1>{props.username}</h1>
      <ActionButton >已关注</ActionButton>
      <ActionButton >triangle</ActionButton>
      <DotsButton />
    </RowContainer>,
    <div>
      <span>{props.timelineCount} 帖子</span>
      <span>{props.followedByCount} 粉丝</span>
      <span>正在关注 {props.followCount}</span>
    </div>,
    <h3>{props.full_name}</h3>,
    <p>
      {useText(props.biography).map((text, index) => [
        <span key={index}>{text}</span>,
        <br key={index + "breaker"} />
      ])}
    </p>,
    <Link strong href={linkShimmed}>{link}</Link>
  ];
};

export const Header = props => {
  return (
    <Container>
      <div
        style={{
          flexGrow: 1,
          flexBasis: 0,
          display: "flex",
          justifyContent: "center"
        }}
        key="1"
      >
        <Avatar pic={props.pic} />
      </div>
      <div key="2" style={{ flexGrow: 2, flexBasis: "30px" }}>
        <Content {...props} />
      </div>
    </Container>
  );
};
