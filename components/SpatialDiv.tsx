import { type BackgroundMaterialType } from "@webspatial/core-sdk";
import ReactDOM from "react-dom/client";
import { useEffect, useRef, useState } from "react";

import { enableDebugTool } from "@webspatial/react-sdk";

enableDebugTool();

export default function TestSpatialDivApp() {
  const materialVals = [
    "none",
    "transparent",
    "thin",
    "translucent",
    "regular",
    "thick",
  ] as BackgroundMaterialType[];
  const [materialIndex, setMaterialIndex] = useState(0);
  const toggleBackgroundMaterial = () => {
    const newIndex = (materialIndex + 1) % materialVals.length;
    document.documentElement.style.setProperty(
      "--xr-background-material",
      materialVals[newIndex]
    );
    console.log("dbg materialVals[i]", materialVals[newIndex]);
    setMaterialIndex(newIndex);
  };

  const [materialIndexForSpatialDiv, setMaterialIndexForSpatialDiv] =
    useState(0);
  const toggleSpatialDivMaterial = () => {
    const newIndex = (materialIndexForSpatialDiv + 1) % materialVals.length;
    setMaterialIndexForSpatialDiv(newIndex);
  };

  return (
    <>
      <div>
        <div className="m-[100px]">
          <h1 className="font-bold text-lg">
            this page background material is: {materialVals[materialIndex]}{" "}
          </h1>
          <button
            className="bg-indigo-500 text-white px-4 py-12 rounded-md"
            onClick={toggleBackgroundMaterial}
          >
            change spatialscene background material
          </button>
        </div>

        <div className="m-[100px]">
          <h1 className="font-bold text-lg">
            this spatialdiv background material is:
            {materialVals[materialIndexForSpatialDiv]}{" "}
          </h1>
          <button
            className="bg-indigo-500 text-white px-4 py-12 rounded-md mb-[20px] "
            onClick={toggleSpatialDivMaterial}
          >
            change spatialdiv background material
          </button>

          <div
            onClick={() => {
              console.log("dbg click spatialdiv");
            }}
            enable-xr
            style={{
              "--xr-back": 100,
              transform: "translateX(100px) translateY(-20px) rotateZ(45deg)",
              width: "200px",
              height: "200px",
              opacity: 0.51,
              "--xr-background-material":
                materialVals[materialIndexForSpatialDiv],
            }}
          >
            this is a spatialdiv
          </div>
        </div>
      </div>
    </>
  );
}
