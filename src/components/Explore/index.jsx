import React, {useEffect, useState} from 'react'
import Service from '../../common/data'
import PreviewList from '../PreviewList'
import {PageContainer} from '../../bases/styled'


export default props => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        Service.getExplore().then(data => setPosts(data))
    }, [])

    return (
        <PageContainer>
            <PreviewList 
                posts={posts} 
            />
        </PageContainer>
    )
} 