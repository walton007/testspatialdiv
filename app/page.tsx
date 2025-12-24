"use client";

import DynamicTest from "@/components/dynamic3d";
// import Hello from "@/components/hello";
import { SSRProvider, enableDebugTool } from "@webspatial/react-sdk";
import SpatialDiv from "@/components/SpatialDiv";

enableDebugTool();

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <SSRProvider>
        <SpatialDiv />
        {/* <DynamicTest /> */}
        {/* <ModelCar /> */}
      </SSRProvider>
    </main>
  );
}
