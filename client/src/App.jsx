import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { ArticleContext } from './contexts/ArticleContext';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

const App = () => {
  const [articles, setArticles] = useState([]);

  return (

      <BrowserRouter>

            <GlobalStyles />
            <ArticleContext.Provider value={{articles , setArticles}}>
                <Router />
            </ArticleContext.Provider>
    
      </BrowserRouter>
   
  );
};

export default App;