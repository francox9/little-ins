import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
    border-radius: 3px;
    background: #fafafa;
    border: solid 1px #dbdbdb;
    min-width: 125px;
    width: 215px;
    height: 28px;
    box-sizing: border-box;
    font-size: 16px;
    padding-left: 26px;
    outline: none;
`

export default () => <InputStyled type="text" style={{height: '30px', width:'200px'}} />