import {  useEffect } from 'react';
import { ArticleItem, ArticleListWrapper, ButtonX } from "./styles";

const ArticleList = ({articles , setArticles}) => {

  useEffect(() => {

    fetch('http://localhost:5000/api/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error al obtener los artículos:', error));
  }, []);

  return (
    <ArticleListWrapper>
      {articles.map((article) => (
        <ArticleItem key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>

          <ButtonX>X</ButtonX>
        </ArticleItem>
      ))}
    </ArticleListWrapper>
  );
};

export default ArticleList;