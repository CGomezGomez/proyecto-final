import { Link } from 'react-router-dom'; 
import { HeaderWrapper } from "./styles";

export const Header = () => {
  return (

    <HeaderWrapper>
          <h1>Blog Personal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Artículos</Link>
            </li>
          </ul>
        </nav>
    </HeaderWrapper>
    
  );
};

export default Header;