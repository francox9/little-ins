import React from 'react'
import styled from "styled-components";
import { PageContainer } from "../bases/styled";
import {Link} from '../bases/styled'

const PageContainerFlex = styled(PageContainer)`
  display: flex;
  flex-flow: row wrap;
`;

//"ABOUT US", "SUPPORT", "PRESS", "API", "JOBS", "PRIVACY", "TERMS", "DIRECTORY", "PROFILES", "HASHTAGS", "LANGUAGE
export default props => {
    const items = ["ABOUT US", "SUPPORT", "PRESS", "API", "JOBS", "PRIVACY", "TERMS", "DIRECTORY", "PROFILES", "HASHTAGS", "LANGUAGE"]
    return (
        <PageContainerFlex>
            <div>
                {items.map(i => <Link marginRight="10px">{i} </Link>)}
            </div>
            <span>© 2019 INSTAGRAM</span>
        </PageContainerFlex>
    )
}