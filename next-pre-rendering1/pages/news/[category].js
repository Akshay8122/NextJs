function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <div>ArticleListByCategory</div>
      <h1>List of products</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  res.setHeader("Set-Cookie", ["name=Akshay", "email=abc@123"]);
  const { category } = params;
  const response = await fetch(`http://localhost:4000/news?category=sports`);
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
