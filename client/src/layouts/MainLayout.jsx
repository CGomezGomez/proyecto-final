import { Link } from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header>
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
      </Header>
  
    </>
  );
};

export default MainLayout;