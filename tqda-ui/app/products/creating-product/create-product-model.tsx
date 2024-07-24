"use client";

import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FormError } from "../../auth/common/form-error.interface";
import { useState } from "react";
import CreateProduct from "../actions/create-product";
import { CloudUploadSharp } from "@mui/icons-material";

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

const fileInputStyles = {
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
};

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function CreateProductModal({ open, handleClose }: Props) {
  const [res, setRes] = useState<FormError>();
  const [fileName, setFileName] = useState("");

  const onClose = () => {
    setRes(undefined);
    handleClose();
    setFileName("");
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
            <Button
              component="label"
              variant="outline"
              startIcon={<CloudUploadSharp />}
            >
              Upload File
              <input
                type="file"
                name="image"
                style={fileInputStyles}
                onChange={(e) =>
                  e.target.files && setFileName(e.target.files[0].name)
                }
              />
            </Button>
            <Typography> {fileName} </Typography>
            <Button type="submit" variant="contained">
              Add Product
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
