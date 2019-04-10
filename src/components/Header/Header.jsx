import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PageContainer } from "../../bases/styled";
import Search from "./Search";
import { RowContainer } from "../../bases/FlexItems";
import { DivideGroup } from "./Divider";
import { InsIcon, InsText, User, Explore, Heart } from "../../bases/Icon";
import { Link } from "react-router-dom";

const Container = styled.header`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  z-index: 10086;
  background: white;
  padding: 0 20px;
  box-sizing: border-box;
`;

const PageContainerFlex = styled(PageContainer)`
  height: ${props => (props.min ? "52px" : "77px")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
`;

const useMinHeader = () => {
  const [minHeader, setMinHeader] = useState(false);

  useEffect(() => {
    const resizeHeader = () => {
      if (window.scrollY > 150 && !minHeader) setMinHeader(true);
      else if (window.scrollY <= 150 && minHeader) setMinHeader(false);
    };
    window.onscroll = resizeHeader;

    return () => {
      window.onscroll = null;
    };
  });

  return minHeader;
};

export default props => {
  const minHeader = useMinHeader();

  return (
    <Container>
      <PageContainerFlex min={minHeader}>
        <Link to="/">
          <RowContainer padding="0">
            <DivideGroup line>
              <InsIcon />
              {minHeader ? null : (
                <InsText style={{ transform: "translateY(3.5px)" }} />
              )}
            </DivideGroup>
          </RowContainer>
        </Link>
        <Search />
        <RowContainer padding="0" justifyContent="flex-end">
          <DivideGroup>
            <Link to="/explore">
              <Explore />
            </Link>
            <Heart />
            <User />
          </DivideGroup>
        </RowContainer>
      </PageContainerFlex>
    </Container>
  );
};
