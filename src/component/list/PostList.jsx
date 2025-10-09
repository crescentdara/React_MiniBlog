import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;

function PostList(props) {
  const { posts = [], onClickItem } = props;

  return (
    <Wrapper>
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
          onClick={() => onClickItem && onClickItem(post)}
        />
      ))}
    </Wrapper>
  );
}

export default PostList;
