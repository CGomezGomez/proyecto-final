import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ArticleListPage from '../pages/ArticleListPage/ArticleListPage';
import MainLayout from '../layouts/MainLayout';

const Router = () => {
	return (

		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route  index element={<HomePage />} />
				<Route  path='/articles' element={<ArticleListPage />} />
			</Route>
		</Routes>
	);
};

export default Router;
