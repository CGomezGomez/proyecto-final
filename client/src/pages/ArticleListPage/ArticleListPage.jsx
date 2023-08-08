import ArticleList from '../../components/articleList/ArticleList';
import { StyledH2 , Footer , FooterText, StyledDiv } from './styles';


const ArticleListPage = () => {
	return (
		
		<StyledDiv>
			<StyledH2>Sección de Artículos</StyledH2>
			<ArticleList />
			<Footer>
				<FooterText>Derechos de autor © 2023. Todos los derechos reservados.</FooterText>
			</Footer>
		</StyledDiv>
		
	);
};

export default ArticleListPage;
