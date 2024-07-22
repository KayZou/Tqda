"use client";

import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import { FormError } from "../auth/common/form-error.interface";
import { useState } from "react";
import CreateProduct from "./create-product";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 2,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function CreateProductModal({ open, handleClose }: Props) {
  const [res, setRes] = useState<FormError>();

  const onClose = () => {
    setRes(undefined);
    handleClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles}>
        <form
          action={async (formData) => {
            const result = await CreateProduct(formData);
            setRes(result);
            if (!result.error) {
              onClose();
            }
          }}
          className="w-full max-w-xs"
        >
          <Stack spacing={2}>
            <TextField
              name="name"
              label="Product name"
              variant="outlined"
              type="text"
              helperText={res && res.error}
              error={res && !!res.error}
              required
            />
            <TextField
              name="description"
              label="Product Description"
              variant="outlined"
              type="text"
              helperText={res && res.error}
              error={res && !!res.error}
              required
            />
            <TextField
              name="price"
              label="Product Price"
              variant="outlined"
              type="number"
              helperText={res && res.error}
              error={res && !!res.error}
              required
            />
            <Button type="submit" variant="contained">
              Add Product
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
