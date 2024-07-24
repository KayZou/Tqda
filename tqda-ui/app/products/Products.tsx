import React from "react";
import GetProducts from "./actions/get-products";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Product from "./Product";

export default async function Products() {
  const products = await GetProducts();
  return (
    <Grid container spacing={3}>
      {products &&
        products.map((product) => (
          <Grid key={product.id} sm={6} lg={4} xs={12}>
            <Product product={product} />
          </Grid>
        ))}
    </Grid>
  );
}
