import React from 'react'
import sprites from '../static/sprites_lg.png'
import styled from 'styled-components'

const IconStyled = styled.span`
    display: inline-block;
    background-repeat: no-repeat;
    background: url(${sprites});
    background-position: ${props => props.backgroundPosition};
    width: ${props => props.width};
    height: ${props => props.height};
    background-size: 282px 248px;
`

export const Share = () => <IconStyled backgroundPosition="-258px -175px" width="24px" height="24px"/>
export const Heart = () => <IconStyled backgroundPosition="0 -199px" width="24px" height="24px"/>
export const Heart_sm = () => <IconStyled backgroundPosition="-167px -83px" width="12px" height="11px"/>

export const Comment = () => <IconStyled backgroundPosition="-183px -25px" width="24px" height="24px"/>
export const Fav = () => <IconStyled backgroundPosition="-258px -50px" width="24px" height="24px"/>
export const Dots =  ()=> <IconStyled backgroundPosition="0 -224px" width="24px" height="24px"/>