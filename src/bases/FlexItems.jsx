import styled from 'styled-components'

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: ${props=>props.padding || 0}
`;

export const FlexItem = styled.span``;

export const Spacer = styled.div`
    flex-grow: 1;
`
export const SingleClnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`