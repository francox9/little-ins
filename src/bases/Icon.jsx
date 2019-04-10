import React from 'react'
import sprites from '../static/sprites_lg.png'
import styled from 'styled-components'

const IconStyled = styled.span`
    display: inline-block;
    background-repeat: no-repeat;
    background: url(${sprites});
    background-position: ${props => props.backgroundPosition};
    width: ${props => props.width || '24px'};
    height: ${props => props.height || '24px'};
    background-size: 282px 248px;
`

export const Share = () => <IconStyled backgroundPosition="-258px -175px" />
export const Heart = () => <IconStyled backgroundPosition="0 -199px" />
export const Heart_sm = () => <IconStyled backgroundPosition="-167px -83px" width="12px" height="11px"/>

export const Comment = () => <IconStyled backgroundPosition="-183px -25px" />
export const Fav = () => <IconStyled backgroundPosition="-258px -50px" />
export const Dots =  ()=> <IconStyled backgroundPosition="0 -224px" />

export const Explore = () => <IconStyled backgroundPosition="-200px -224px" />
export const User = () => <IconStyled backgroundPosition="-208px -25px" />

export const InsIcon = () => <IconStyled backgroundPosition="-183px -125px" />
export const InsText = props => <IconStyled {...props} backgroundPosition="0 -144px" height="29px" width="103px" />

