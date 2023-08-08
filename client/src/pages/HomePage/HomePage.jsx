import { useContext, useState } from 'react';
import ArticleForm from '../../components/articleForm/ArticleForm';
import { ArticleContext } from '../../contexts/ArticleContext';
import { Footer, FooterText, StyledContainer, StyledDiv, StyledH2, StyledImg } from './styles';


const HomePage = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { articles, setArticles } = useContext(ArticleContext);

	return (
		<StyledContainer>
			<StyledH2>¡Bienvenido a mi Blog Personal!</StyledH2>
			<StyledDiv>
			
				<StyledImg src="blog.jpg" alt="" />
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
			</StyledDiv>
			<Footer>
        		<FooterText>Derechos de autor © 2023. Todos los derechos reservados.</FooterText>
      		</Footer>

		</StyledContainer>
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
