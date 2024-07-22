"use client";

import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import CreateProductModal from "./create-product-model";
import { useState } from "react";

export default function CreateProductFab() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <CreateProductModal
        open={modalVisible}
        handleClose={() => setModalVisible(false)}
      />
      <div className="absolute left-10 bottom-10">
        <Fab color="info" onClick={() => setModalVisible(true)}>
          <Add />
        </Fab>
      </div>
    </>
  );
}
