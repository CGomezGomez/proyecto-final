import { useContext, useState } from 'react';
import ArticleForm from '../../components/articleForm/ArticleForm';
import { ArticleContext } from '../../contexts/ArticleContext';

const HomePage = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { articles, setArticles } = useContext(ArticleContext);

	return (
		<div>
			<h2>¡Bienvenido a mi Blog Personal!</h2>r
			<ArticleForm
				onSubmit={e =>
					handleAddArticle(
						e,
						title,
						content,
						articles,
						setArticles,
						setTitle,
						setContent
					)
				}
				title={title}
				setTitle={setTitle}
				content={content}
				setContent={setContent}
			/>
		</div>
	);
};

const handleAddArticle = (
	e,
	title,
	content,
	articles,
	setArticles,
	setTitle,
	setContent
) => {
	e.preventDefault();
	fetch('http://localhost:5000/api/articles', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ title, content })
	})
		.then(response => response.json())
		.then(articleToAdd => {
			setArticles([...articles, articleToAdd]);
			setTitle('');
			setContent('');
		})
		.catch(error => {
			console.error('Error al agregar el artículo:', error);
		});
};
export default HomePage;
