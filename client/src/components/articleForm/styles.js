import styled from "styled-components";

const FormWrapper = styled.form`

  background-color: black;
  margin: auto;
  max-width: 100%;
  height: 800px;
  padding: 1rem;
  border: 3px solid #ccc;
  border-radius: 4px ;

`;

const StyledH1 = styled.h1`

  color: white;
  font-size: 20px;

`
const InputField = styled.input`

  font-size: 18px;
  padding: 8px;
  width: 100%;
  margin-bottom: 16px;

`;

const TextArea = styled.textarea`

  background-color: white;
  width: 100%;
  height: 75%; 
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  font-size: 18px;
  resize: none;
  
`;

const Button = styled.button`

  background-color: #333;
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
  
`;


export { FormWrapper, InputField, TextArea, Button , StyledH1};