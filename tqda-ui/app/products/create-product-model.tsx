"use client";

import { Box, Modal } from "@mui/material";

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
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles}></Box>
    </Modal>
  );
}
