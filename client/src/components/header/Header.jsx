import { Link } from 'react-router-dom'; 
import { HeaderWrapper, ListNav, NavContainer, StyledLi } from "./styles";

export const Header = () => {
  return (

    <HeaderWrapper>
          <h1>Gomez</h1>
        <NavContainer>
          <ListNav>
            <StyledLi>
              <Link to="/">Home</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/articles">Artículos</Link>
            </StyledLi>
          </ListNav>
        </NavContainer>
    </HeaderWrapper>
    
  );
};

export default Header;