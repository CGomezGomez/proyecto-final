import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ArticleContext } from '../../contexts/ArticleContext';
import { ArticleContent, ArticleTitle, CenteredContainer, Container, EditLink } from './styles';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { articles } = useContext(ArticleContext);

  const article = articles.find(article => article._id === id);

  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (

    <CenteredContainer>
        <ArticleTitle>{article.title}</ArticleTitle>
      <Container>
        <ArticleContent>{article.content}</ArticleContent>
        <EditLink to={`/article/${id}/edit`}>Editar</EditLink>
      </Container>
    </CenteredContainer>
  );
};

export default ArticleDetailPage;