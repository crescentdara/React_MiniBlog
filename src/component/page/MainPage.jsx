import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import PostList from '../list/PostList';
import data from '../../data.json';

/* ===== light palette (살짝-톤) ===== */
const COLORS = {
  bg1: '#f6f9ff',
  bg2: '#fffaf6',
  card: '#ffffff',
  border: 'rgba(15, 23, 42, 0.08)',
  shadow: '0 10px 30px rgba(0,0,0,0.06)',
  primary: '#4F7BFF',      // 블루 포인트
  accent: '#FF8A3D',       // 오렌지 포인트
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
  
  /* 내부 간격 */
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  color: ${COLORS.text};
  font-weight: 700;
  letter-spacing: 0.2px;
`;

const Subtle = styled.span`
  font-size: 12px;
  color: ${COLORS.muted};
`;

const ActionButton = styled(Button)`
  /* Button 컴포넌트가 className을 전달한다면 이렇게 살짝 색상만 */
  border-radius: 12px;
  transition: transform .08s ease, box-shadow .2s ease, background-color .2s ease;
  background: ${COLORS.primary};
  color: #fff;
  &:hover { transform: translateY(-1px); }
`;

function MainPage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <HeaderRow>
          <div>
            <Title>미니블로그</Title>
            <Subtle>Made By Dalbit</Subtle>
          </div>

          <ActionButton
            title="글 작성하기"
            onClick={() => navigate('/post-write')}
          />
        </HeaderRow>

        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
