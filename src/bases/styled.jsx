import React from "react";
import styled from "styled-components";

export const Link = styled.a.attrs(props => ({
  href: props.href || ''
}))`
  color: #003569;
  text-decoration: none;
  font-weight: ${props => props.strong ? 600 : 'normal'};
  margin-right: ${props => props.marginRight || 0};
`
export const PageContainer = styled.div`
  max-width: 935px;
  width: 100%;
  margin: auto;
`;