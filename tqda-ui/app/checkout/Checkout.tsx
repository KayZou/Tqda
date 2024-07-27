"use client";
import { Button } from "@mui/material";
import React from "react";
import checkout from "./actions/checkout";
import getStripe from "./stripe";

interface Props {
  productId: number;
}

export default function Checkout({ productId }: Props) {
  
  async function handleCheckout() {
    const session = await checkout(productId);
    const stripe = await getStripe()
    await stripe?.redirectToCheckout({
      sessionId: session.data.id
    })
  }
  
  return (
    <Button
      variant="contained"
      className="max-w-[25%]"
      onClick={handleCheckout}
    >
      Buy
    </Button>
  );
}
