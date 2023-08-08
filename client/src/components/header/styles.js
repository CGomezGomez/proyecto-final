import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;

const NavContainer = styled.nav`
`;

const ListNav = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 2rem;
`;

const StyledLi = styled.li`

  margin-right: 2rem;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #f76c6c;
    }
  }
`;

export { HeaderWrapper, NavContainer, ListNav, StyledLi };