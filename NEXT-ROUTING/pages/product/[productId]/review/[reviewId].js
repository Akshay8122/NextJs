import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      {reviewId} review for the porduct {productId}
    </div>
  );
}

export default Review;
