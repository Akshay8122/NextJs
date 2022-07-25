import Link from "next/link";
function ProductList({ posts }) {
  return (
    <>
      <h3>ProductList</h3>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>
                {post.id}
                {post.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  console.log('Generating/Regenerating ProductList')
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
    revalidate: 10, 
  };
}
