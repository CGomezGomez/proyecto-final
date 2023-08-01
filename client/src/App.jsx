import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/header/Header';
import ArticleForm from './components/articleForm/ArticleForm';
import ArticleList from './components/articleList/ArticleList';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  return (
    <>
      <GlobalStyles />
      <Header />
      <ArticleForm onSubmit={(e)=> handleAddArticle (e, title, content , articles , setArticles , setTitle , setContent )} title = {title} setTitle = {setTitle}  content = {content}  setContent = {setContent} />
      <ArticleList articles={articles} setArticles={setArticles}/>
    </>
  );
};

const handleAddArticle = (e, title, content , articles , setArticles , setTitle , setContent ) => {
  e.preventDefault()
  fetch('http://localhost:5000/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title , content}),
  })
    .then((response) => response.json())
    .then((articleToAdd) => {
      setArticles([...articles, articleToAdd]);
      setTitle("");
      setContent("")
    })
    .catch((error) => {
      console.error('Error al agregar el artículo:', error);
    });

    
};

export default App;