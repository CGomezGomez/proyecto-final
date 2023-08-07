import { useContext, useState, useEffect } from 'react';
import { ArticleContext } from '../../contexts/ArticleContext';
import { useParams, useNavigate } from 'react-router-dom'; 

export const ArticleEditPage = () => {
  const { articles, setArticles } = useContext(ArticleContext);
  const { id } = useParams();
  const navigate = useNavigate(); 

  const [editedArticle, setEditedArticle] = useState(null);

  useEffect(() => {
    const articleToEdit = articles.find(article => article._id === id);
    setEditedArticle(articleToEdit);
  }, [id, articles]);

  return (
    <div>
      {editedArticle ? (
        <div>
          <h2>Editar Artículo</h2>
          <label>Título:</label>
          <input
            type="text"
            value={editedArticle.title}
            onChange={ (e) => handleTitleChange(e, editedArticle, setEditedArticle)}
          />
          <label>Contenido:</label>
          <textarea
            value={editedArticle.content}
            onChange= {(e) => handleContentChange(e, editedArticle, setEditedArticle)}
          />
          <button onClick={(e) => handleSaveEdit(articles, id, editedArticle, setArticles, navigate)}>Guardar Cambios</button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};


const handleTitleChange = (e , editedArticle, setEditedArticle) => {
  setEditedArticle({
    ...editedArticle,
    title: e.target.value
  });
};

const handleContentChange = (e , editedArticle, setEditedArticle) => {
  setEditedArticle({
    ...editedArticle,
    content: e.target.value
  });
};

const handleSaveEdit = async (articles, id, editedArticle, setArticles, navigate) => {
  if (editedArticle) {
    try {
      const response = await fetch(`http://localhost:5000/api/articles/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedArticle)
      });

      if (response.ok) {
        const updatedArticles = articles.map(article =>
          article._id === id ? editedArticle : article
        );
        setArticles(updatedArticles);
        navigate(`/article/${id}`);
      } else {
        console.error('Error al actualizar el artículo en el servidor');
      }
    } catch (error) {
      console.error('Error al actualizar el artículo:', error);
    }
  }
};


export default ArticleEditPage;