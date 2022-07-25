import Link from "next/link";
import styles from "../../pages/styles.module.css";
function ProductList({ productId = 500 }) {
  return (
    <div className={styles.list}>
      <Link href="/product/product1">
        <h2>product 1</h2>
      </Link>
      <h2>product 2</h2>
      <h2>product 3</h2>
      <Link href="/">
        <a>home</a>
      </Link>
      <h2>
        {/* <Link href={`/product/${productId}`}>
          <a>other product</a>
        </Link> */}
      </h2>
    </div>
  );
}

export default ProductList;
