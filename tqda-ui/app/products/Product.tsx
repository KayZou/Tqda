"use client";
import { Card, CardActionArea, Stack, Typography } from "@mui/material";
import React from "react";
import { Product as IProduct } from "./interfaces/product.interface";
import Image from "next/image";
import { API_URl } from "../constants/api";
import { getProductImage } from "./product-image";
import { useRouter } from "next/navigation";

interface Props {
  product: IProduct;
}

export default function Product({ product }: Props) {
  const router = useRouter();
  return (
    <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
      <Card className="p-4">
        <Stack gap={3}>
          <Typography variant={"h4"}>{product.name}</Typography>
          {product.imageExist && (
            <Image
              src={getProductImage(product.id)}
              width={"0"}
              height={"0"}
              className="w-full h-auto"
              alt="Product picture"
              sizes="100vw"
            />
          )}
          <Typography>{product.description}</Typography>
          <Typography>{product.price}$</Typography>
        </Stack>
      </Card>
    </CardActionArea>
  );
}
