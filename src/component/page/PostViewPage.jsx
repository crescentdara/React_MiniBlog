import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import CommentList from '../list/CommentList';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import data from '../../data.json';

const COLORS = {
  bg1: '#f6f9ff',
  bg2: '#fffaf6',
  card: '#ffffff',
  border: 'rgba(15, 23, 42, 0.08)',
  shadow: '0 10px 30px rgba(0,0,0,0.06)',
  primary: '#4F7BFF',
  accent: '#FF8A3D',
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

const BackRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostContainer = styled.div`
  padding: 16px 18px;
  border: 1px solid ${COLORS.border};
  border-radius: 16px;
  background: #fff;
`;

const TitleText = styled.h2`
  font-size: 26px;
  font-weight: 800;
  margin: 0 0 8px;
  color: ${COLORS.text};
`;

const MetaRow = styled.div`
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: ${COLORS.muted};
  margin-bottom: 4px;
`;

const ContentText = styled.p`
  font-size: 18px;
  line-height: 30px;
  white-space: pre-wrap;
  color: ${COLORS.text};
  margin: 0;
`;

const CommentLabel = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 4px 0;
  color: ${COLORS.primary};
`;

const PrimaryButton = styled(Button)`
  border-radius: 12px;
  background: ${COLORS.primary};
  color: #fff;
`;

const AccentButton = styled(Button)`
  border-radius: 12px;
  background: ${COLORS.accent};
  color: #fff;
`;

function PostViewPage() {
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.find((item) => item.id == postId);
  const [comment, setComment] = useState('');

  return (
    <Wrapper>
      <Container>
        <BackRow>
          <PrimaryButton
            title="뒤로가기"
            onClick={() => navigate('/')}
          />
        </BackRow>

        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <MetaRow>
            <span>글번호 #{post.id}</span>
            <span>댓글 {post.comments?.length ?? 0}개</span>
          </MetaRow>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />

        <TextInput
          height={40}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <AccentButton
          title="댓글 작성하기"
          onClick={() => navigate('/')}
        />
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;
