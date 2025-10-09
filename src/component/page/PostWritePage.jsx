import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';

const COLORS = {
  bg1: '#f6f9ff',
  bg2: '#fffaf6',
  card: '#ffffff',
  border: 'rgba(15, 23, 42, 0.08)',
  shadow: '0 10px 30px rgba(0,0,0,0.06)',
  primary: '#4F7BFF',
  text: '#0f172a',
  muted: '#64748b',
};

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 32px 16px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: linear-gradient(180deg, ${COLORS.bg1} 0%, ${COLORS.bg2} 100%);
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  background: ${COLORS.card};
  border: 1px solid ${COLORS.border};
  border-radius: 20px;
  box-shadow: ${COLORS.shadow};
  padding: 20px;

  & > *:not(:last-child) { margin-bottom: 16px; }
`;

const Label = styled.label`
  display: block;
  font-size: 13px;
  color: ${COLORS.muted};
  margin-bottom: 6px;
`;

const Row = styled.div`
  & + & { margin-top: 8px; }
`;

const PrimaryButton = styled(Button)`
  border-radius: 12px;
  background: ${COLORS.primary};
  color: #fff;
`;

function PostWritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <Wrapper>
      <Container>
        <Row>
          <Label>제목</Label>
          <TextInput
            height={20}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Row>

        <Row>
          <Label>내용</Label>
          <TextInput
            height={480}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Row>

        <PrimaryButton
          title="글 작성하기"
          onClick={() => navigate('/')}
        />
      </Container>
    </Wrapper>
  );
}

export default PostWritePage;



