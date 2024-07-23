import CreateProductFab from "./products/creating-product/create-product-fab";
import Products from "./products/Products";

export default async function Home() {
  return (
    <>
      <Products />
      <CreateProductFab />
    </>
  );
}
