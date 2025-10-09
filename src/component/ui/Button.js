import React from 'react';
import styled, { css } from 'styled-components';

/** 팔레트 (은은한 블루/오렌지) */
const COLORS = {
  primary: '#4F7BFF',      // 블루
  primaryHover: '#3E69F1',
  accent: '#FF8A3D',       // 오렌지 (outline/soft 때 사용 가능)
  textOnPrimary: '#ffffff',
  border: 'rgba(15, 23, 42, 0.12)',
  shadow: '0 6px 18px rgba(0,0,0,0.06)',
  ring: 'rgba(79, 123, 255, 0.35)', // focus-visible
};

const sizes = {
  sm: css`padding: 6px 12px; font-size: 14px; border-radius: 10px;`,
  md: css`padding: 10px 16px; font-size: 15px; border-radius: 12px;`,
  lg: css`padding: 12px 18px; font-size: 16px; border-radius: 14px;`,
};

const variants = {
  primary: css`
    background: linear-gradient(180deg, ${COLORS.primary} 0%, ${COLORS.primaryHover} 100%);
    color: ${COLORS.textOnPrimary};
    border: 1px solid ${COLORS.border};
    box-shadow: ${COLORS.shadow};
    &:hover { filter: brightness(1.03); transform: translateY(-1px); }
    &:active { transform: translateY(0); filter: brightness(0.98); }
  `,
  outline: css`
    background: #fff;
    color: ${COLORS.primary};
    border: 1px solid ${COLORS.primary};
    &:hover { background: rgba(79,123,255,0.06); }
    &:active { background: rgba(79,123,255,0.12); }
  `,
  soft: css`
    background: rgba(79,123,255,0.12);
    color: ${COLORS.primary};
    border: 1px solid ${COLORS.border};
    &:hover { background: rgba(79,123,255,0.16); }
    &:active { background: rgba(79,123,255,0.2); }
  `,
};

const StyledButton = styled.button`
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  transition: all .15s ease;
  ${(p) => sizes[p.$size || 'md']}
  ${(p) => variants[p.$variant || 'primary']}

  ${(p) => p.$fullWidth && css`width: 100%;`}

  &:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 4px ${COLORS.ring};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
    filter: none;
  }
`;

function Button(props) {
  const {
    title,
    onClick,
    className,
    disabled,
    /** 선택 옵션 (없어도 됨): */
    variant = 'primary', // 'primary' | 'outline' | 'soft'
    size = 'md',         // 'sm' | 'md' | 'lg'
    fullWidth = false,
    type = 'button',
  } = props;

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
    >
      {title || 'button'}
    </StyledButton>
  );
}

export default Button;
