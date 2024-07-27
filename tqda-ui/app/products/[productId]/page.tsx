import { Stack, Typography } from "@mui/material";
import GetProduct from "./get-product";
import Image from "next/image";
import { getProductImage } from "../product-image";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Checkout from "@/app/checkout/Checkout";

interface Props {
  params: { productId: string };
}

export default async function ProductPage({ params }: Props) {
  const product = await GetProduct(+params.productId);
  return (
    <Grid container marginBottom={"2rem"} rowGap={3}>
      {product.imageExist && (
        <Grid md={6} xs={12}>
          <Image
            src={getProductImage(product.id)}
            alt="Product image"
            width={0}
            height={0}
            className="w-full sm:w-3/4 h-auto"
            sizes="100vw"
          />
        </Grid>
      )}
      <Grid md={6} xs={12}>
        <Stack>
          <Typography variant="h1">{product.name}</Typography>
          <Typography variant="h3"> {product.description} </Typography>
          <Typography variant="h4"> {product.price}$ </Typography>
          <Checkout productId={product.id} />
        </Stack>
      </Grid>
    </Grid>
  );
}
