import styled from "styled-components";

const StyledArticleDetail = styled.div`

  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 80%;
  
`;

const StyledH2 = styled.h2`
    display: flex;
    justify-content: center;
    margin: 5em 0;

`;

const StyledLabel = styled.label`

  font-size: 30px;

`

const StyledInput = styled.input`

    font-size: 18px;
    padding: 8px;
    width: 100%;
    margin: 1em 0;

`;

 const StyledTextarea = styled.textarea`

    font-size: 1.125em;
    padding: .5em;
    width: 100%;
    height: 300px; 
    margin: 1em 0;
    resize: none;

`;

const StyledButton = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  background-color: black;
  color: #fff;
  border: none;
  cursor: pointer;
  justify-content: center;
`;

 const StyledLoading = styled.p`
  font-size: 18px;
`;



export {StyledH2 , StyledArticleDetail , StyledInput , StyledTextarea , StyledButton , StyledLoading , StyledLabel}