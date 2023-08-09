import { Link } from 'react-router-dom'; 
import { HeaderWrapper, ListNav, NavContainer, StyledLi , StyledImg , StyledContain } from "./styles";

export const Header = () => {
  return (

    <HeaderWrapper>
      <StyledContain>
          <h1>Gomez</h1>
          <StyledImg src="/icon.png" alt="" />
      </StyledContain>
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