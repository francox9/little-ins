import React from "react";
import styled from "styled-components";
import { ToGroup3 } from "../../common/utils";
import StoryPreview from './StoryPreview'

const Column3Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 935px;
  width: 100%;
`;
const Column3Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export default props => {
  const { posts } = props;
  let groupPosts = ToGroup3(posts);
  return (
    <Column3Container>
      {groupPosts.map((group, index) => (
        <Column3Row key={index}>
        {
            group.map((story, i) => 
                <StoryPreview 
                    {...story} 
                    key={'' + index + i} 
                    lastOfRow={i == 2} 
                />
            )
        }
        </Column3Row>
      ))}
    </Column3Container>
  );
};
