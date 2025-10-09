import React from 'react';
import styled from 'styled-components';
import CommentListItem from './CommentListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* 자식 간격 */
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

function CommentList(props) {
  const { comments = [] } = props;

  return (
    <Wrapper>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </Wrapper>
  );
}

export default CommentList;
