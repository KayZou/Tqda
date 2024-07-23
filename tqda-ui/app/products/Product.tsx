import { Card, Typography } from "@mui/material";
import React from "react";
import { Product as IProduct } from "./interfaces/product.interface";

interface Props {
  product: IProduct;
}

export default function Product({ product }: Props) {
  return (
    <Card className="p-4">
      <Typography variant={"h4"}>{product.name}</Typography>
      <Typography>{product.description}</Typography>
      <Typography>{product.price}$</Typography>
    </Card>
  );
}
