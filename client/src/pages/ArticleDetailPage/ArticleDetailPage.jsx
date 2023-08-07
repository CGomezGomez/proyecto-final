import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ArticleContext } from '../../contexts/ArticleContext';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { articles } = useContext(ArticleContext);

  const article = articles.find(article => article._id === id);

  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <Link to={`/article/${id}/edit`}>Editar</Link> 
    </div>
  );
};

export default ArticleDetailPage;