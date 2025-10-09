import React from 'react';
import styled from 'styled-components';

const COLORS = {
  card: '#ffffff',
  border: 'rgba(15, 23, 42, 0.08)',
  borderHover: 'rgba(15, 23, 42, 0.16)',
  text: '#0f172a',
  muted: '#64748b',
  ring: 'rgba(79, 123, 255, 0.2)',
  shadow: '0 6px 18px rgba(0,0,0,0.05)',
};

const Wrapper = styled.div`
  width: 100%;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  background: ${COLORS.card};
  border: 1px solid ${COLORS.border};
  border-radius: 14px;
  transition: border-color .15s ease, box-shadow .15s ease, transform .08s ease;

  &:hover {
    border-color: ${COLORS.borderHover};
    box-shadow: ${COLORS.shadow};
    transform: translateY(-1px);
  }

  &:focus-within {
    box-shadow: 0 0 0 4px ${COLORS.ring};
  }
`;

const ContextText = styled.p`
  font-size: 15px;
  line-height: 22px;
  color: ${COLORS.text};
  white-space: pre-wrap;
  margin: 0;
`;

function CommentListItem(props) {
  const { comment } = props;
  return (
    <Wrapper>
      <ContextText>{comment.content}</ContextText>
    </Wrapper>
  );
}

export default CommentListItem;
