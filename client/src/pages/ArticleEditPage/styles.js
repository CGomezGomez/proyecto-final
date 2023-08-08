import styled from "styled-components";

const StyledArticleDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledH2 = styled.h2`
    
    display: flex;
    justify-content: center;
    margin: 5rem 0;

`;

const StyledInput = styled.input`
  font-size: 18px;
  padding: 8px;
  width: 100%;
  margin-bottom: 16px;
`;

 const StyledTextarea = styled.textarea`
  font-size: 18px;
  padding: 8px;
  width: 100%;
  height: 300px; /* Ajusta la altura según tus preferencias */
  margin-bottom: 16px;
`;

const StyledButton = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

 const StyledLoading = styled.p`
  font-size: 18px;
`;

export {StyledH2 , StyledArticleDetail , StyledInput , StyledTextarea , StyledButton , StyledLoading}