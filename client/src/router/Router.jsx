import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ArticleListPage from '../pages/ArticleListPage/ArticleListPage';
import ArticleDetailPage from '../pages/ArticleDetailPage/ArticleDetailPage';
import MainLayout from '../layouts/MainLayout';
import ArticleEditPage from '../pages/ArticleEditPage/ArticleEditPage';




const Router = () => {
	return (

		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route  index element={<HomePage />} />
				<Route  path='/articles' element={<ArticleListPage />} />
				<Route path="/article/:id" element={<ArticleDetailPage />} />
				<Route path="/article/:id/edit" element={<ArticleEditPage />} />
			</Route>
		</Routes>
	);
};

export default Router;
