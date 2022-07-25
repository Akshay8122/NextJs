import { useRouter } from "next/router";
function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  return <div>productDetail {productId} </div>;
}

export default ProductDetail;
