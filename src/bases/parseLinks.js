import React from 'react'
import styled from 'styled-components'
import {Link} from './styled'

export default text => {
    return text.split(/([@#]\S+)/)
      .map((phrase, index) => (phrase[0] === '#' || phrase[0] === '@') ? 
        <Link key={'link'+index} href="">{phrase}</Link> : 
        <span key={index}>{phrase}</span> 
      )
  }