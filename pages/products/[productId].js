import { useRouter } from "next/router";
const ProductsId = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h2>ProductsId Page {productId}</h2>
    </div>
  );
};

export default ProductsId;
