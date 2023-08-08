import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem  auto;
  width: 60%;


`;

const ArticleTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ArticleContent = styled.p`
  font-size: 18px;
  text-align: center;
`;

const EditLink = styled(Link)`
  margin-top: 20px;
  font-size: 16px;
  position: absolute;
  bottom: 5%;
  right: 10%;
  
`;

export { Container, ArticleTitle, ArticleContent, EditLink };