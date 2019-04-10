import React from 'react'
import styled from 'styled-components'

const Divider = styled.div`
    margin-left: 15px;
    margin-right: 15px;
    height: 28px;

    background-color: #262626;
    transform: scaleX(0.5);
    width: ${props => props.line ? '0.5px' : '0'};
`

export const DivideGroup = props => {
    const {line} = props
    let children = props.children.filter(c => !!c)

    const items = [...Array(children.length * 2 - 1)]

    return items.map((_, i) => {
        return i % 2 === 0 ? children[i/2] : <Divider key={i} line={line}/>
    })

}