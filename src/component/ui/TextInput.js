import React from 'react';
import styled, { css } from 'styled-components';

const COLORS = {
  border: 'rgba(15, 23, 42, 0.12)',
  borderHover: 'rgba(15, 23, 42, 0.22)',
  bg: '#ffffff',
  text: '#0f172a',
  muted: '#64748b',
  ring: 'rgba(79, 123, 255, 0.35)',
};

const StyledTextarea = styled.textarea`
  width: 95%;
  ${(props) =>
    props.$height &&
    css`
      height: ${props.$height}px;
    `}
  padding: 14px 16px;
  font-size: 15px;
  line-height: 22px;
  color: ${COLORS.text};
  background: ${COLORS.bg};
  border: 1px solid ${COLORS.border};
  border-radius: 12px;
  transition: border-color .15s ease, box-shadow .15s ease, background-color .15s ease;
  resize: vertical; /* 세로만 리사이즈 허용 */

  &::placeholder {
    color: ${COLORS.muted};
  }

  &:hover {
    border-color: ${COLORS.borderHover};
  }

  &:focus {
    outline: none;
    border-color: ${COLORS.borderHover};
    box-shadow: 0 0 0 4px ${COLORS.ring};
  }

  /* 모바일에서 폰트 사이즈 강제 확대 방지 */
  @supports (-webkit-touch-callout: none) {
    font-size: 16px;
  }
`;

function TextInput(props) {
  const {
    height,
    value,
    onChange,
    placeholder,
    className,
    maxLength,
    name,
    id,
  } = props;

  return (
    <StyledTextarea
      $height={height}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      maxLength={maxLength}
      name={name}
      id={id}
    />
  );
}

export default TextInput;
