// import { useRouter } from "next/router";
function Post({ posts }) {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1> Loading... </h1>;
  // }

  return (
    <>
      <h2>
        {posts.id} {posts.title}
      </h2>
      <p>{posts.body}</p>
    </>
  );
}
export default Post;

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((posts) => {
  //   return {
  //     fallback: true,
  //     params: {
  //       postId: `${posts.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    // paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /posts${params.postId}`);

  return {
    props: {
      posts: data,
    },
    revalidate: 3,
  };
}
