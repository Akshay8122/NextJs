import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../pages/styles.module.css";
function Home() {
  const router = useRouter();
  const Onhandle = () => {
    console.log("completed course");
    router.push("/product");
  };

  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>blog</a>
      </Link>
      <br></br>
      <Link href="/product">
        <a>product</a>
      </Link>

      <div>
        <button onClick={Onhandle}>view Products</button>
      </div>
    </div>
  );
}

export default Home;
