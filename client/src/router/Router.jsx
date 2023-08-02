
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import ArticleDetails from './components/articleDetails/ArticleDetails';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/articles" component={ArticleDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;