import styled from "styled-components";

const FormWrapper = styled.form`
  background-color: #f8ded1;
  max-width: 50%;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputField = styled.input`
  background-color: #c3e6cb;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  background-color: #c3e6cb;
  width: 100%;
  height: 150px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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

export { FormWrapper, InputField, TextArea, Button };