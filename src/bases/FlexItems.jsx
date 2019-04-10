import styled from 'styled-components'
import {notExist} from '../common/utils'

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  padding: ${props=> notExist(props.padding) ? '10px' : props.padding}
  justify-content: ${props => props.justifyContent || 'flex-start'};
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