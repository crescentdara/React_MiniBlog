import React from 'react';
import styled from 'styled-components';

const COLORS = {
  card: '#ffffff',
  border: 'rgba(15, 23, 42, 0.08)',
  borderHover: 'rgba(15, 23, 42, 0.16)',
  text: '#0f172a',
  muted: '#64748b',
  primary: '#4F7BFF',
  ring: 'rgba(79, 123, 255, 0.2)',
  shadow: '0 6px 18px rgba(0,0,0,0.06)',
};

const Wrapper = styled.button`
  width: 100%;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${COLORS.card};
  border: 1px solid ${COLORS.border};
  border-radius: 16px;
  cursor: pointer;

  transition: border-color .15s ease, box-shadow .15s ease, transform .08s ease, background-color .15s ease;

  /* 기본 버튼 리셋 */
  appearance: none;
  border-width: 1px;

  &:hover {
    border-color: ${COLORS.borderHover};
    background: #fff;
    box-shadow: ${COLORS.shadow};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px ${COLORS.ring};
  }
`;

const TitleText = styled.p`
  font-size: 17px;
  font-weight: 700;
  color: ${COLORS.text};
  margin: 0;
`;

const RightHint = styled.span`
  font-size: 12px;
  color: ${COLORS.muted};
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &::after {
    content: '›';
    font-size: 18px;
    line-height: 1;
    color: ${COLORS.primary};
    transform: translateY(-1px);
  }
`;

function PostListItem(props) {
  const { post, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
      <RightHint>열기</RightHint>
    </Wrapper>
  );
}

export default PostListItem;
