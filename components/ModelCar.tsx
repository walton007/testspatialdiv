"use client";

import { Model, ModelLoadEvent } from "@webspatial/react-sdk";
import { CSSProperties } from "react";

export default function ModelCar() {
  const src =
    "https://utzmqao3qthjebc2.public.blob.vercel-storage.com/saeukkang.usdz";

  const style: CSSProperties = {
    position: "absolute",
    left: "15%",
    width: "200px",
    height: "200px",
    display: "block",
    "--xr-back": 100,
    transform: "rotateY(-90deg)",
  };

  const onLoad = (event: ModelLoadEvent) => {
    console.log("model onLoad");
  };

  const onError = (event: ModelLoadEvent) => {
    console.log("model onError", event);
  };

  return (
    <Model
      enable-xr
      style={style}
      src={src}
      onLoad={onLoad}
      onError={onError}
    />
  );
}
