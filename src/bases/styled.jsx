import React from "react";
import styled from "styled-components";

export const Link = styled.a`
  color: #003569;
  text-decoration: none;
  font-weight: ${props => props.strong ? 600 : 'normal'};
`
export const PageContainer = styled.div`
  max-width: 935px;
  width: 100%;
  margin: auto;
`;