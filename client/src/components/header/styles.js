import styled from "styled-components";

const HeaderWrapper = styled.header`
  
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid black;
 

  h1 {
    font-size: 2rem;
    margin: 0;
    
  }
`;

const NavContainer = styled.nav`

`;

const StyledContain = styled.div`
 
 display: flex;
 align-items: center;
 gap: 10px;
`

const StyledImg = styled.img`

  width:5%;
`

const ListNav = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 1rem;
`;

const StyledLi = styled.li`

  margin-right: 2rem;
  font-size: 20px;

  a {
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: gray;
    }
  }
`;

export { HeaderWrapper, NavContainer, ListNav, StyledLi , StyledImg , StyledContain};