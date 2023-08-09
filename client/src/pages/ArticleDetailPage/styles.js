import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CenteredContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    flex-direction: column;

  
`;

const Container = styled.div`

    display: flex;
    align-items: center;
    width: 60%;
    border: 1px solid grey; 
    padding: 20px;
    background-color: white;

`;

const ArticleTitle = styled.h2`

  font-size: 24px;
  width: 60%;

`;

const ArticleContent = styled.p`

  font-size: 18px;
  text-align: center;
  
`;

const EditLink = styled(Link)`

  margin-top: 20px;
  font-size: 16px;
  position: fixed;
  bottom: 5%;
  right: 10%;
  font-size: 16px;
  padding: 8px 16px;
  background-color: black;
  color: #fff;
  border: none;
  cursor: pointer;
  
`;

export { Container, ArticleTitle, ArticleContent, EditLink , CenteredContainer};