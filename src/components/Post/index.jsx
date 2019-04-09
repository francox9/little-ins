import React from 'react'
import {PageContainer} from '../../bases/styled'

export default props => {
    return (
        <PageContainer>
            {JSON.stringify(props)}
        </PageContainer>
    )
}