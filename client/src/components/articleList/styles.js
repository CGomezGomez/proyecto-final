import styled from "styled-components";

const ArticleListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

`;

const ArticleItem = styled.div`

  background-color: #f8ded1;
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow-wrap: break-word;

`;

const ButtonX = styled.button`

  display: flex;
  position: absolute;
  top: 5%; 
  right: 0.5rem; 
  background-color:  #c3e6cb; 
  color: black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;



export { ArticleListWrapper, ArticleItem, ButtonX  };