import styled from 'styled-components'

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  padding: ${props=>props.padding || '10px'}
`;

export const FlexItem = styled.div``;

export const Spacer = styled.div`
    flex-grow: 1;
`
export const SingleClnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`