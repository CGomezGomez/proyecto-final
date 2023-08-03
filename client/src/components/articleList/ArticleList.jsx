import { useContext, useEffect } from 'react';
import { ArticleItem, ArticleListWrapper, ButtonX } from "./styles";
import { ArticleContext } from '../../contexts/ArticleContext';

const ArticleList = () => {

  const {articles , setArticles} = useContext(ArticleContext);

  useEffect(() => {
    fetch('http://localhost:5000/api/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error al obtener los artículos:', error));
  }, []);

  const handleDeleteArticle = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/articles/${id}`, { method: 'DELETE' });
      setArticles(articles.filter((article) => article._id !== id));
    } catch (error) {
      console.error('Error al eliminar el artículo:', error);
    }
  };



  return (
    <ArticleListWrapper>
      {articles.map((article) => (
        <ArticleItem key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <ButtonX onClick={() => handleDeleteArticle(article._id)}>X</ButtonX>
        </ArticleItem>
      ))}
    </ArticleListWrapper>
  );
};

export default ArticleList;