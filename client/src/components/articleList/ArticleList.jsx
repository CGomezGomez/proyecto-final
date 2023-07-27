import { ArticleItem, ArticleListWrapper } from "./styles";

const ArticleList = ({ articles }) => {
  return (
    <ArticleListWrapper>
      {articles.map((article) => (
        <ArticleItem key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </ArticleItem>
      ))}
    </ArticleListWrapper>
  );
};

export default ArticleList;