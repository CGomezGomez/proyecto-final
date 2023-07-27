import  { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/header/Header';
import ArticleForm from './components/articleForm/ArticleForm';
import ArticleList from './components/articleList/ArticleList';

const App = () => {

  const [articles, setArticles] = useState([

  ]);

  
  const handleAddArticle = (newArticle) => {
  
    const tempId = Date.now();
    const articleToAdd = { _id: tempId, ...newArticle };

    setArticles([...articles, articleToAdd]);
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <ArticleForm onSubmit={handleAddArticle} />
      <ArticleList articles={articles}/>
    </>
  );
};

export default App;