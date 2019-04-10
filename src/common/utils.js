import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
    color: #003569;
    text-decoration: none;
`

export const notExist = a => a === null || a === undefined

export const parseLink = text => {
    return text.split(/([\@\#]\S+)/)
      .map((phrase, index) => (phrase[0] == '#' || phrase[0] == '@') ? 
        <Link key={'link'+index} href="">{phrase}</Link> : 
        <span key={index}>{phrase}</span> 
      )
  }

  export const ToGroup3 = items => {
    const lines = []
    let line = []
    
    items.forEach(i => {
        line.push(i)

        if (line.length == 3) {
            lines.push(line)
            line = []
        }
    })
    if (line.length > 0) lines.push(line)

    return lines
}